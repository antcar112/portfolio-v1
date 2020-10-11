import { DarkModeButton, NavLink, SocialLinks } from '@src/ui/layout/nav/components'
import { media } from '@src/utils'
import React from 'react'
import styled from 'styled-components'

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

export const NavList = () => (
  <StyledNavList>
    <NavLink direction='right' name='Work' to='/' />
    <NavLink direction='left' name='About' to='/about/' />
    <NavLink href='mailto:anthony.j.caron@gmail.com' name='Contact' />
    <SocialLinks />
    <DarkModeButton />
  </StyledNavList>
)
