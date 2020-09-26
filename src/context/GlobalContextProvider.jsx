import React from 'react'
import { ThemeProvider } from '@src/context'

export const GlobalContextProvider = ({ children }) => <ThemeProvider>{children}</ThemeProvider>
