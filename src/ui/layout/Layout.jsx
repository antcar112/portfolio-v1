import { useTheme } from '@src/context'
import { GlobalStyle, Theme } from '@src/styles'
import { Footer, Helmet, LoadingPage, Nav } from '@src/ui/layout'
import React from 'react'

export const Layout = ({ children, pageTitle }) => {
  const { mounted, theme } = useTheme()

  return (
    <Theme colorTheme={theme}>
      <Helmet pageTitle={pageTitle} />
      {!mounted ? (
        <LoadingPage />
      ) : (
        <>
          <GlobalStyle />
          <Nav />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </Theme>
  )
}
