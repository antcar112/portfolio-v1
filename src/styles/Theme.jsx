import React from 'react'
import { ThemeProvider } from 'styled-components'

const fonts = {
  cursive: ['Rubik', 'Helvetica', 'serif'],
  heading: ['Rubik', 'Helvetica', 'serif'],
  body: ['Karla', 'Helvetica', 'sans-serif'],
}

const theme = {
  font: {
    cursive: fonts.cursive.join(', '),
    heading: fonts.heading.join(', '),
    body: fonts.body.join(', '),
  },
  hoverTransition:
    'color 200ms ease-out, border 200ms ease-out, background 200ms ease-out, background-color 200ms ease-out',
}

const lightTheme = {
  color: {
    text: '#000000',
    textSecondary: '#777777',
    bg: '#ffffff',
    bgCard: '#ffffff',
    primary: '#0F97DB',
    primaryDarkened: '#0d8bca',
  },
}

const darkTheme = {
  color: {
    text: '#ffffff',
    textSecondary: '#AAAAAA',
    bg: '#151515',
    bgCard: '#1D1D1D',
    primary: '#0F97DB',
    primaryDarkened: '#0d8bca',
  },
}

export const Theme = ({ children, colorTheme }) => (
  <ThemeProvider theme={theme}>
    <ThemeProvider theme={colorTheme === 'light' ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  </ThemeProvider>
)
