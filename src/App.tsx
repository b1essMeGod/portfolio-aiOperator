import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import PageTransition from './components/motion/PageTransition'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import { type Language } from './i18n/content'
import { useReducedMotionConfig } from './motion/useReducedMotionConfig'
import { scrollTopButton } from './motion/variants'

type Theme = 'dark' | 'light'

function AnimatedRoutes({
  language,
  setLanguage,
  theme,
  setTheme,
}: {
  language: Language
  setLanguage: (language: Language) => void
  theme: Theme
  setTheme: (theme: Theme) => void
}) {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0 })}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <HomePage
                language={language}
                onLanguageChange={setLanguage}
                theme={theme}
                onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              />
            </PageTransition>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <PageTransition>
              <ProjectPage language={language} />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

function AppRoutes({
  language,
  setLanguage,
  theme,
  setTheme,
}: {
  language: Language
  setLanguage: (language: Language) => void
  theme: Theme
  setTheme: (theme: Theme) => void
}) {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false)
  const motionConfig = useReducedMotionConfig()
  const scrollTopVariants = motionConfig.getVariants(scrollTopButton)

  useEffect(() => {
    const onScroll = () => setIsScrollTopVisible(window.scrollY > 420)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app-root">
      <div className="ambient-bg" aria-hidden="true">
        <span className="ambient-orb ambient-orb--1" />
        <span className="ambient-orb ambient-orb--2" />
        <span className="ambient-orb ambient-orb--3" />
        <span className="ambient-orb ambient-orb--4" />
      </div>

      <div className="app-content">
        <AnimatedRoutes language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />

        <AnimatePresence>
          {isScrollTopVisible ? (
            <motion.button
              key="scroll-top"
              type="button"
              className="scroll-top-button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label={language === 'ru' ? 'Наверх' : 'To top'}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={scrollTopVariants}
              whileHover={{ y: -3, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              ↑
            </motion.button>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const storedLanguage = window.localStorage.getItem('language')
    return storedLanguage === 'en' || storedLanguage === 'ru' ? storedLanguage : 'ru'
  })
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = window.localStorage.getItem('theme')
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    window.localStorage.setItem('language', language)
  }, [language])

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
    </BrowserRouter>
  )
}

export default App
