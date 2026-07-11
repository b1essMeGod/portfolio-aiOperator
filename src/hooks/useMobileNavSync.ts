import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

const SITE_IDLE_MS = 480
const NAV_SCROLL_SETTLE_MS = 420
const TOOLBAR_OWNER_LOCK_MS = 1600
const POINTER_RELEASE_IDLE_MS = 120

type SyncOwner = 'page' | 'toolbar'

function getClosestNavId(viewport: HTMLElement, ids: string[]) {
  const center = viewport.scrollLeft + viewport.clientWidth / 2
  let closestId = ids[0]
  let closestDistance = Number.POSITIVE_INFINITY

  for (const id of ids) {
    const item = viewport.querySelector<HTMLElement>(`[data-nav-id="${id}"]`)
    if (!item) continue

    const itemCenter = item.offsetLeft + item.offsetWidth / 2
    const distance = Math.abs(center - itemCenter)

    if (distance < closestDistance) {
      closestDistance = distance
      closestId = id
    }
  }

  return closestId
}

function getSwipeTargetIndex(startIndex: number, deltaX: number, viewportWidth: number, sectionCount: number) {
  if (Math.abs(deltaX) < 12) return startIndex

  const direction = deltaX > 0 ? 1 : -1
  const maxHops = direction > 0 ? sectionCount - 1 - startIndex : startIndex
  if (maxHops === 0) return startIndex

  const dragSections = Math.abs(deltaX) / (viewportWidth * 0.2)
  if (dragSections < 0.32) return startIndex

  let hops = 1
  if (dragSections >= 1.05) {
    hops = Math.min(maxHops, Math.ceil(dragSections - 0.05))
  } else if (maxHops >= 2 && dragSections >= 0.62) {
    hops = 2
  }

  return startIndex + direction * hops
}

function centerNavItem(viewport: HTMLElement, id: string, behavior: ScrollBehavior = 'auto') {
  const item = viewport.querySelector<HTMLElement>(`[data-nav-id="${id}"]`)
  if (!item || viewport.clientWidth === 0) return

  const targetLeft = item.offsetLeft + item.offsetWidth / 2 - viewport.clientWidth / 2
  const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth)

  viewport.scrollTo({
    left: Math.max(0, Math.min(targetLeft, maxScroll)),
    behavior,
  })
}

function cancelViewportScrollAnimation(viewport: HTMLElement) {
  viewport.scrollTo({ left: viewport.scrollLeft, behavior: 'auto' })
}

function updateEdgeSpacers(viewport: HTMLElement) {
  const edges = viewport.querySelectorAll<HTMLElement>('.site-nav-mobile__edge')
  const items = viewport.querySelectorAll<HTMLElement>('.site-nav-mobile__item')
  if (edges.length < 2 || items.length === 0 || viewport.clientWidth === 0) return

  const halfViewport = viewport.clientWidth / 2
  const firstItem = items[0]
  const lastItem = items[items.length - 1]

  edges[0].style.width = `${Math.max(0, halfViewport - firstItem.offsetWidth / 2)}px`
  edges[1].style.width = `${Math.max(0, halfViewport - lastItem.offsetWidth / 2)}px`
}

function setNavAria(viewport: HTMLElement, id: string | null) {
  if (!id) return

  viewport.querySelectorAll<HTMLElement>('.site-nav-mobile__item').forEach((item) => {
    if (item.dataset.navId === id) {
      item.setAttribute('aria-current', 'true')
    } else {
      item.removeAttribute('aria-current')
    }
  })
}

export function useMobileNavSync(
  sectionIds: string[],
  activeId: string | null,
  onNavigate: (id: string, behavior?: ScrollBehavior) => void,
) {
  const viewportRef = useRef<HTMLDivElement>(null)
  const syncOwnerRef = useRef<SyncOwner>('page')
  const isProgrammaticNavScrollRef = useRef(false)
  const programmaticTimerRef = useRef<number | null>(null)
  const ownerLockTimerRef = useRef<number | null>(null)
  const pageIdleTimerRef = useRef<number | null>(null)
  const pointerReleaseTimerRef = useRef<number | null>(null)
  const navScrollEndTimerRef = useRef<number | null>(null)
  const isPageScrollingRef = useRef(false)
  const frozenHighlightIdRef = useRef<string | null>(null)
  const gestureStartPointerXRef = useRef(0)
  const gestureStartIndexRef = useRef(0)
  const gestureTargetIdRef = useRef<string | null>(null)
  const isToolbarGestureRef = useRef(false)
  const activeIdRef = useRef(activeId)
  const focusedIdRef = useRef<string | null>(null)
  const defaultId = sectionIds[0] ?? null
  const [activeNavId, setActiveNavId] = useState<string | null>(() => activeId ?? defaultId)

  useEffect(() => {
    activeIdRef.current = activeId
  }, [activeId])

  const clearPointerReleaseTimer = useCallback(() => {
    if (pointerReleaseTimerRef.current !== null) {
      window.clearTimeout(pointerReleaseTimerRef.current)
      pointerReleaseTimerRef.current = null
    }
  }, [])

  const clearPageIdleTimer = useCallback(() => {
    if (pageIdleTimerRef.current !== null) {
      window.clearTimeout(pageIdleTimerRef.current)
      pageIdleTimerRef.current = null
    }
  }, [])

  const clearNavScrollEndTimer = useCallback(() => {
    if (navScrollEndTimerRef.current !== null) {
      window.clearTimeout(navScrollEndTimerRef.current)
      navScrollEndTimerRef.current = null
    }
  }, [])

  const clearProgrammaticNavScroll = useCallback(() => {
    isProgrammaticNavScrollRef.current = false
    if (programmaticTimerRef.current !== null) {
      window.clearTimeout(programmaticTimerRef.current)
      programmaticTimerRef.current = null
    }
  }, [])

  const markProgrammaticNavScroll = useCallback((behavior: ScrollBehavior) => {
    isProgrammaticNavScrollRef.current = true
    if (programmaticTimerRef.current !== null) {
      window.clearTimeout(programmaticTimerRef.current)
    }
    programmaticTimerRef.current = window.setTimeout(
      () => {
        isProgrammaticNavScrollRef.current = false
        programmaticTimerRef.current = null
      },
      behavior === 'smooth' ? 720 : 80,
    )
  }, [])

  const applyToolbarHighlight = useCallback((id: string, animate: boolean) => {
    const viewport = viewportRef.current
    if (!viewport) return

    viewport.classList.remove('is-page-scrolling')

    if (!animate) {
      viewport.classList.add('is-snapping')
    }

    frozenHighlightIdRef.current = id
    setNavAria(viewport, id)

    if (focusedIdRef.current !== id) {
      focusedIdRef.current = id
      setActiveNavId(id)
    }

    if (!animate) {
      void viewport.offsetWidth
      viewport.classList.remove('is-snapping')
    }
  }, [])

  const beginPageScrolling = useCallback(() => {
    if (syncOwnerRef.current !== 'page') return

    isPageScrollingRef.current = true
    clearPageIdleTimer()
    clearPointerReleaseTimer()

    const viewport = viewportRef.current
    if (!viewport) return

    viewport.classList.add('is-page-scrolling')
    viewport.classList.add('is-snapping')

    if (!frozenHighlightIdRef.current && focusedIdRef.current) {
      frozenHighlightIdRef.current = focusedIdRef.current
    }
  }, [clearPageIdleTimer, clearPointerReleaseTimer])

  const syncNavFromPage = useCallback(
    (id: string) => {
      const viewport = viewportRef.current
      if (!viewport || syncOwnerRef.current !== 'page') return
      if (isPageScrollingRef.current || isToolbarGestureRef.current) return

      isPageScrollingRef.current = false
      viewport.classList.remove('is-page-scrolling')
      const fromIndex = sectionIds.indexOf(focusedIdRef.current ?? id)
      const toIndex = sectionIds.indexOf(id)
      const isAdjacent = Math.abs(toIndex - fromIndex) === 1
      applyToolbarHighlight(id, isAdjacent)
      markProgrammaticNavScroll('smooth')
      updateEdgeSpacers(viewport)
      centerNavItem(viewport, id, 'smooth')
    },
    [applyToolbarHighlight, markProgrammaticNavScroll, sectionIds],
  )

  const runSiteIdleSync = useCallback(() => {
    if (syncOwnerRef.current !== 'page') return
    if (isToolbarGestureRef.current) return

    isPageScrollingRef.current = false

    const currentActiveId = activeIdRef.current
    if (!currentActiveId) return

    syncNavFromPage(currentActiveId)
  }, [syncNavFromPage])

  const scheduleSiteIdleSync = useCallback(() => {
    if (syncOwnerRef.current !== 'page') return

    clearPageIdleTimer()
    pageIdleTimerRef.current = window.setTimeout(() => {
      pageIdleTimerRef.current = null
      runSiteIdleSync()
    }, SITE_IDLE_MS)
  }, [clearPageIdleTimer, runSiteIdleSync])

  const scheduleSiteIdleSyncAfterPointer = useCallback(() => {
    if (syncOwnerRef.current !== 'page') return

    clearPointerReleaseTimer()
    pointerReleaseTimerRef.current = window.setTimeout(() => {
      pointerReleaseTimerRef.current = null
      scheduleSiteIdleSync()
    }, POINTER_RELEASE_IDLE_MS)
  }, [clearPointerReleaseTimer, scheduleSiteIdleSync])

  const grantToolbarOwnership = useCallback(() => {
    syncOwnerRef.current = 'toolbar'
    clearPageIdleTimer()
    clearPointerReleaseTimer()
    isPageScrollingRef.current = false

    if (ownerLockTimerRef.current !== null) {
      window.clearTimeout(ownerLockTimerRef.current)
    }

    ownerLockTimerRef.current = window.setTimeout(() => {
      ownerLockTimerRef.current = null
      syncOwnerRef.current = 'page'
      viewportRef.current?.classList.remove('is-toolbar-owned')
    }, TOOLBAR_OWNER_LOCK_MS)

    viewportRef.current?.classList.add('is-toolbar-owned')
    viewportRef.current?.classList.remove('is-page-scrolling')
  }, [clearPageIdleTimer, clearPointerReleaseTimer])

  const updateGestureTarget = useCallback(
    (clientX: number) => {
      const viewport = viewportRef.current
      if (!viewport || !isToolbarGestureRef.current) return

      const deltaX = gestureStartPointerXRef.current - clientX
      const targetIndex = getSwipeTargetIndex(
        gestureStartIndexRef.current,
        deltaX,
        viewport.clientWidth,
        sectionIds.length,
      )

      const targetId = sectionIds[targetIndex]
      if (!targetId || targetId === gestureTargetIdRef.current) return

      gestureTargetIdRef.current = targetId
      const fromIndex = sectionIds.indexOf(focusedIdRef.current ?? targetId)
      const isAdjacent = Math.abs(targetIndex - fromIndex) === 1
      applyToolbarHighlight(targetId, isAdjacent)
    },
    [applyToolbarHighlight, sectionIds],
  )

  const beginToolbarInteraction = useCallback(
    (clientX: number) => {
      grantToolbarOwnership()
      clearNavScrollEndTimer()
      clearProgrammaticNavScroll()

      const viewport = viewportRef.current
      if (!viewport) return

      cancelViewportScrollAnimation(viewport)
      viewport.classList.add('is-dragging')

      isToolbarGestureRef.current = true
      gestureStartPointerXRef.current = clientX

      const anchorId = frozenHighlightIdRef.current ?? focusedIdRef.current ?? getClosestNavId(viewport, sectionIds)
      gestureStartIndexRef.current = Math.max(0, sectionIds.indexOf(anchorId))
      gestureTargetIdRef.current = anchorId
      applyToolbarHighlight(anchorId, false)
    },
    [
      applyToolbarHighlight,
      clearNavScrollEndTimer,
      clearProgrammaticNavScroll,
      grantToolbarOwnership,
      sectionIds,
    ],
  )

  const endToolbarInteraction = useCallback(() => {
    viewportRef.current?.classList.remove('is-dragging')
  }, [])

  const commitToolbarSelection = useCallback(
    (id: string) => {
      const viewport = viewportRef.current
      if (!viewport) return

      grantToolbarOwnership()
      updateEdgeSpacers(viewport)
      const fromIndex = sectionIds.indexOf(focusedIdRef.current ?? id)
      const toIndex = sectionIds.indexOf(id)
      const isAdjacent = Math.abs(toIndex - fromIndex) === 1
      applyToolbarHighlight(id, isAdjacent)
      markProgrammaticNavScroll('smooth')
      centerNavItem(viewport, id, 'smooth')

      if (id !== activeIdRef.current) {
        onNavigate(id, 'auto')
      }
    },
    [applyToolbarHighlight, grantToolbarOwnership, markProgrammaticNavScroll, onNavigate, sectionIds],
  )

  useLayoutEffect(() => {
    const initialId = activeIdRef.current ?? defaultId
    if (!initialId) return

    focusedIdRef.current = initialId
    frozenHighlightIdRef.current = initialId
    setActiveNavId(initialId)

    const frameId = window.requestAnimationFrame(() => {
      const viewport = viewportRef.current
      if (!viewport) return
      updateEdgeSpacers(viewport)
      applyToolbarHighlight(initialId, false)
      centerNavItem(viewport, initialId, 'auto')
      viewport.classList.add('is-ready')
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [applyToolbarHighlight, defaultId, sectionIds])

  useEffect(() => {
    const onWindowScroll = () => {
      beginPageScrolling()
      scheduleSiteIdleSync()
    }

    const onWindowPointerDown = (event: PointerEvent) => {
      if (syncOwnerRef.current !== 'page') return
      const viewport = viewportRef.current
      if (viewport?.contains(event.target as Node)) return
      beginPageScrolling()
    }

    const onWindowPointerUp = () => {
      if (syncOwnerRef.current !== 'page') return
      scheduleSiteIdleSyncAfterPointer()
    }

    window.addEventListener('scroll', onWindowScroll, { passive: true })
    window.addEventListener('pointerdown', onWindowPointerDown, { passive: true })
    window.addEventListener('pointerup', onWindowPointerUp, { passive: true })
    window.addEventListener('pointercancel', onWindowPointerUp, { passive: true })

    return () => {
      window.removeEventListener('scroll', onWindowScroll)
      window.removeEventListener('pointerdown', onWindowPointerDown)
      window.removeEventListener('pointerup', onWindowPointerUp)
      window.removeEventListener('pointercancel', onWindowPointerUp)
      clearPageIdleTimer()
      clearPointerReleaseTimer()
    }
  }, [
    beginPageScrolling,
    clearPageIdleTimer,
    clearPointerReleaseTimer,
    scheduleSiteIdleSync,
    scheduleSiteIdleSyncAfterPointer,
  ])

  useEffect(() => {
    const viewport = viewportRef.current
    if (!viewport || sectionIds.length === 0) return

    const finishNavScroll = () => {
      if (!isToolbarGestureRef.current || syncOwnerRef.current !== 'toolbar') return

      isToolbarGestureRef.current = false

      const targetId = gestureTargetIdRef.current ?? getClosestNavId(viewport, sectionIds)
      commitToolbarSelection(targetId)
    }

    const scheduleFinishNavScroll = () => {
      if (!isToolbarGestureRef.current) return
      clearNavScrollEndTimer()
      navScrollEndTimerRef.current = window.setTimeout(() => {
        navScrollEndTimerRef.current = null
        finishNavScroll()
      }, NAV_SCROLL_SETTLE_MS)
    }

    const onScroll = () => {
      if (!isToolbarGestureRef.current || isProgrammaticNavScrollRef.current) return
      scheduleFinishNavScroll()
    }

    const onScrollEnd = () => {
      if (!isToolbarGestureRef.current || isProgrammaticNavScrollRef.current) return
      clearNavScrollEndTimer()
      window.requestAnimationFrame(finishNavScroll)
    }

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return
      beginToolbarInteraction(event.clientX)
      viewport.setPointerCapture(event.pointerId)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (!isToolbarGestureRef.current) return
      updateGestureTarget(event.clientX)
    }

    const onPointerUp = (event: PointerEvent) => {
      if (viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId)
      }
      endToolbarInteraction()

      if (isToolbarGestureRef.current && gestureTargetIdRef.current) {
        clearNavScrollEndTimer()
        cancelViewportScrollAnimation(viewport)
        window.requestAnimationFrame(() => {
          finishNavScroll()
        })
      }
    }

    viewport.addEventListener('scroll', onScroll, { passive: true })
    viewport.addEventListener('scrollend', onScrollEnd)
    viewport.addEventListener('pointerdown', onPointerDown)
    viewport.addEventListener('pointermove', onPointerMove)
    viewport.addEventListener('pointerup', onPointerUp)
    viewport.addEventListener('pointercancel', onPointerUp)

    const resizeObserver = new ResizeObserver(() => {
      if (syncOwnerRef.current === 'toolbar' || isPageScrollingRef.current) return
      updateEdgeSpacers(viewport)
      const currentId = frozenHighlightIdRef.current ?? focusedIdRef.current ?? getClosestNavId(viewport, sectionIds)
      centerNavItem(viewport, currentId, 'auto')
    })
    resizeObserver.observe(viewport)

    return () => {
      viewport.removeEventListener('scroll', onScroll)
      viewport.removeEventListener('scrollend', onScrollEnd)
      viewport.removeEventListener('pointerdown', onPointerDown)
      viewport.removeEventListener('pointermove', onPointerMove)
      viewport.removeEventListener('pointerup', onPointerUp)
      viewport.removeEventListener('pointercancel', onPointerUp)
      resizeObserver.disconnect()
      clearNavScrollEndTimer()
    }
  }, [
    beginToolbarInteraction,
    clearNavScrollEndTimer,
    commitToolbarSelection,
    endToolbarInteraction,
    sectionIds,
    updateGestureTarget,
  ])

  useEffect(
    () => () => {
      if (programmaticTimerRef.current !== null) window.clearTimeout(programmaticTimerRef.current)
      if (ownerLockTimerRef.current !== null) window.clearTimeout(ownerLockTimerRef.current)
      clearPageIdleTimer()
      clearPointerReleaseTimer()
    },
    [clearPageIdleTimer, clearPointerReleaseTimer],
  )

  const navigateFromNav = (id: string) => {
    const viewport = viewportRef.current
    if (!viewport) return

    isToolbarGestureRef.current = false
    gestureTargetIdRef.current = id
    grantToolbarOwnership()
    clearProgrammaticNavScroll()
    viewport.classList.remove('is-dragging')
    const fromIndex = sectionIds.indexOf(focusedIdRef.current ?? id)
    const toIndex = sectionIds.indexOf(id)
    const isAdjacent = Math.abs(toIndex - fromIndex) === 1
    applyToolbarHighlight(id, isAdjacent)
    updateEdgeSpacers(viewport)
    markProgrammaticNavScroll('smooth')
    centerNavItem(viewport, id, 'smooth')
    onNavigate(id, 'smooth')
  }

  return { viewportRef, navigateFromNav, activeNavId }
}
