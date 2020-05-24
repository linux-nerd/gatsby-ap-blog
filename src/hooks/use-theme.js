import { useState, useEffect } from "react"

export const LIGHT_THEME = "light"
export const DARK_THEME = "dark"

export const useTheme = () => {
  const getPreferredTheme =
    global &&
    global.localStorage &&
    global.localStorage.getItem("selectedTheme")
  const prefersDarkMode =
    global &&
    global.matchMedia &&
    global.matchMedia("(prefers-color-scheme: dark)").matches
  const defaultTheme = LIGHT_THEME
  const getInitialTheme = () => {
    if (getPreferredTheme !== null) {
      return getPreferredTheme
    }
    if (prefersDarkMode) {
      return DARK_THEME
    }

    return defaultTheme
  }
  const [theme, setTheme] = useState(getInitialTheme())
  const [isLightTheme, setIsLightTheme] = useState(theme === LIGHT_THEME)

  useEffect(() => {
    setTheme(isLightTheme ? LIGHT_THEME : DARK_THEME)
  }, [isLightTheme, setTheme])

  const toggleTheme = () => {
    setIsLightTheme(prevState => {
      const newState = !prevState
      window.localStorage &&
        window.localStorage.setItem(
          "selectedTheme",
          newState ? LIGHT_THEME : DARK_THEME
        )
      return newState
    })
  }

  return { theme, setTheme, isLightTheme, toggleTheme }
}
