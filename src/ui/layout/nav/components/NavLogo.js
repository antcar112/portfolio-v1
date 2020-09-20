import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import logo from '@src/assets/images/logo.png'
import { media } from '@src/utils'

const NavLogoContainer = styled(AniLink)`
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  line-height: 60px;
  transition: ${({ theme }) => theme.hoverTransition};

  & .logo {
    height: 40px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.down.lg} {
      height: 35px;
    }

    ${media.down.sm} {
      height: 30px;
      margin-right: 10px;
    }
  }

  & span {
    font-family: ${({ theme }) => theme.font.body};
    color: ${({ theme }) => theme.color.bg};
    font-size: 26px;
    display: block;
    font-weight: 700;

    ${media.down.lg} {
      font-size: 21px;
    }
    ${media.down.sm} {
      font-size: 18px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.color.textSecondary};
  }
`

export const NavLogo = () => {
  const themeContext = useContext(ThemeContext)
  return (
    <NavLogoContainer to='/' cover direction='right' bg={themeContext.color.primary} duration={0.8}>
      <img className='logo' src={logo} alt='Anthony Caron - Developer' />
    </NavLogoContainer>
  )
}
