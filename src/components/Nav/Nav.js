import React, { useState } from 'react'
import styled from 'styled-components'

import Drawer from 'src/components/Nav/Drawer'
import Hamburger from 'src/components/Nav/Hamburger'
import Header from 'src/components/Nav/Header'
import NavList from 'src/components/Nav/NavList'
import NavLogo from 'src/components/Nav/NavLogo'

const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <Header>
      <StyledNav>
        <NavLogo />
        <NavList />
        <Hamburger drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
      </StyledNav>
    </Header>
  )
}

export default Nav
