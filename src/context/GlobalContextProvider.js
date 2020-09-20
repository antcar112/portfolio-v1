import React from 'react'
import { useDarkMode } from '@src/hooks'

export const GlobalThemeContext = React.createContext()

const GlobalContextProvider = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode()

  const state = {
    theme: theme,
    toggle: toggleTheme,
    mounted: componentMounted,
  }
  return <GlobalThemeContext.Provider value={state}>{children}</GlobalThemeContext.Provider>
}

export default GlobalContextProvider
