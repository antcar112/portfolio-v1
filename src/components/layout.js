import React, { Fragment, useContext } from 'react'

import Footer from 'src/components/Footer/Footer'
import Helmet from 'src/components/Helmet/Helmet'
import LoadingPage from 'src/components/LoadingPage/LoadingPage'
import Nav from 'src/components/Nav/Nav'
import { GlobalThemeContext } from 'src/context/GlobalContextProvider'
import GlobalStyle from 'src/styles/GlobalStyle'
import Theme from 'src/styles/Theme'

const Layout = ({ pageTitle, children }) => {
  const theme = useContext(GlobalThemeContext)

  return (
    <Theme colorTheme={theme.theme}>
      <Helmet pageTitle={pageTitle} />
      {!theme.mounted ? (
        <LoadingPage />
      ) : (
        <Fragment>
          <GlobalStyle />
          <Nav />
          <main>{children}</main>
          <Footer />
        </Fragment>
      )}
    </Theme>
  )
}

export default Layout
