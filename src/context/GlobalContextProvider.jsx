import { ThemeProvider } from '@src/context'
import React from 'react'

export const GlobalContextProvider = ({ children }) => <ThemeProvider>{children}</ThemeProvider>
