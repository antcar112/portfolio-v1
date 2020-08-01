import React from 'react'
import styled from 'styled-components'

import DarkModeButton from 'src/components/Nav/DarkModeButton'
import NavLink from 'src/components/Nav/NavLink'
import SocialLinks from 'src/components/Nav/SocialLinks'
import { media } from 'src/utils/media.js'

const StyledNavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;

  ${media.down.md} {
    display: none;
  }

  & li {
    line-height: 60px;
  }
`

const NavList = () => (
  <StyledNavList>
    <NavLink to='/' name='Work' direction='right' />
    <NavLink to='/about/' name='About' direction='left' />
    <NavLink href='mailto:anthony.j.caron@gmail.com' name='Contact' />
    <SocialLinks />
    <DarkModeButton />
  </StyledNavList>
)

export default NavList
