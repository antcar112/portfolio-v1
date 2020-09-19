import React, { useContext } from 'react'

import { GlobalThemeContext } from '@src/context/GlobalContextProvider'
import GlobalStyle from '@src/styles/GlobalStyle'
import Theme from '@src/styles/Theme'
import { Footer, Helmet, LoadingPage, Nav } from '@src/ui/layout'

export const Layout = ({ pageTitle, children }) => {
  const theme = useContext(GlobalThemeContext)

  return (
    <Theme colorTheme={theme.theme}>
      <Helmet pageTitle={pageTitle} />
      {!theme.mounted ? (
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
