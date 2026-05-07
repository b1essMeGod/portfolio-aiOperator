import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import { type Language } from './i18n/content'

type Theme = 'dark' | 'light'

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
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrollTopVisible(window.scrollY > 420)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              language={language}
              onLanguageChange={setLanguage}
              theme={theme}
              onThemeToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            />
          }
        />
        <Route path="/projects/:slug" element={<ProjectPage language={language} />} />
      </Routes>

      <button
        type="button"
        className={`scroll-top-button ${isScrollTopVisible ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={language === 'ru' ? 'Наверх' : 'To top'}
      >
        ↑
      </button>
    </>
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
