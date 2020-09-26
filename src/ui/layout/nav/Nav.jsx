import { Drawer, Hamburger, Header, NavList, NavLogo } from '@src/ui/layout/nav/components'
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

export const Nav = () => {
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
