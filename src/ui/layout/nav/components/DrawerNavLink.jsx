import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const NavListItem = styled.li`
  display: block;
  width: 100%;

  & button {
    border: none;
    background: none;
  }

  & a,
  & button {
    font-size: 1.1em;
    text-decoration: none;
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 3vh;
    cursor: pointer;

    & div {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 160px;

      & span {
        transition: ${({ theme }) => theme.hoverTransition};
      }

      & svg {
        transition: ${({ theme }) => theme.hoverTransition};
        font-size: 1.5em;
      }
    }

    &:hover div span,
    &:hover div svg {
      color: ${({ theme }) => theme.color.textSecondary};
    }

    &.nav_drawer_link--active div {
      color: ${({ theme }) => theme.color.text};

      &::before {
        content: '';
        height: 3px;
        background: ${({ theme }) => theme.color.primary};
        position: absolute;
        bottom: -7px;
        left: -12px;
        right: -12px;
      }
    }
  }
`

export const DrawerNavLink = ({ to, href, direction, name, icon, email, onClick }) => {
  const themeContext = useContext(ThemeContext)

  if (to) {
    return (
      <NavListItem>
        <AniLink
          to={to}
          cover
          direction={direction}
          bg={themeContext.color.primary}
          duration={0.8}
          activeClassName='nav_drawer_link--active'
        >
          <DrawLinkContent name={name} icon={icon} />
        </AniLink>
      </NavListItem>
    )
  }
  if (href && !email) {
    return (
      <NavListItem>
        <a href={href} target='_blank' rel='noopener noreferrer'>
          <DrawLinkContent name={name} icon={icon} />
        </a>
      </NavListItem>
    )
  }
  if (href && email) {
    return (
      <NavListItem>
        <a href={href}>
          <DrawLinkContent name={name} icon={icon} />
        </a>
      </NavListItem>
    )
  }

  return (
    <NavListItem>
      <button onClick={onClick} type='button'>
        <DrawLinkContent name={name} icon={icon} />
      </button>
    </NavListItem>
  )
}

const DrawLinkContent = ({ name, icon }) => (
  <div>
    <span>{name}</span>
    {icon}
  </div>
)
