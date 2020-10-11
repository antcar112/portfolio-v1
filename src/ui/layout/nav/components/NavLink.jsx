import { media } from '@src/utils'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React, { useContext } from 'react'
import styled, { css, ThemeContext } from 'styled-components'

const styles = css`
  text-decoration: none;
  font-size: 1.1em;
  display: block;
  padding: 0 20px;
  position: relative;
  color: ${({ theme }) => theme.color.text};
  transition: ${({ theme }) => theme.hoverTransition};

  ${media.down.lg} {
    padding: 0 12px;
  }

  &.nav_link--active {
    color: ${({ theme }) => theme.color.text};

    &::before {
      content: '';
      height: 2px;
      background: ${({ theme }) => theme.color.primary};
      position: absolute;
      bottom: 15px;
      left: 10px;
      right: 10px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.color.textSecondary};
  }
`

const StyledNavLink = styled(AniLink)`
  ${styles};
`

const StyledNavAnchor = styled.a`
  ${styles};
`

export const NavLink = ({ direction, href, name, to }) => {
  const themeContext = useContext(ThemeContext)

  if (href) {
    return (
      <li>
        <StyledNavAnchor href={href}>{name}</StyledNavAnchor>
      </li>
    )
  }
  return (
    <li>
      <StyledNavLink
        activeClassName='nav_link--active'
        bg={themeContext.color.primary}
        cover
        direction={direction}
        duration={0.8}
        to={to}
      >
        {name}
      </StyledNavLink>
    </li>
  )
}
