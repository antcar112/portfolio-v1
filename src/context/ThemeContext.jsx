import React, { useContext } from 'react'
import { useDarkMode } from '@src/hooks'

const initialState = {
  theme: 'light',
  toggle: null,
  mounted: false,
}

const ThemeContext = React.createContext(initialState)

export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode()

  const state = {
    theme,
    toggle: toggleTheme,
    mounted: componentMounted,
  }
  return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
