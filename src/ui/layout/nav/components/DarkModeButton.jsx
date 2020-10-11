import { useTheme } from '@src/context'
import React from 'react'
import { IoMdMoon, IoMdSunny } from 'react-icons/io'
import styled from 'styled-components'

const DarkModeBtn = styled.button`
  border: none;
  background: none;
  height: 60px;
  transition: ${({ theme }) => theme.hoverTransition};
  padding: 0 15px;
  cursor: pointer;
  outline: none;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.color.textSecondary};

    & span {
      transform: translateY(0);
      opacity: 1;
    }
  }

  & span {
    position: absolute;
    width: 130px;
    top: 20px;
    left: 25px;
    pointer-events: none;
    color: ${({ theme }) => theme.color.textSecondary};
    transform: translateY(15px);
    opacity: 0;
    transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
  }

  & .sun {
    font-size: 22px;
    display: ${({ colorTheme }) => (colorTheme === 'light' ? 'none' : 'block')};
  }
  & .moon {
    font-size: 22px;
    display: ${({ colorTheme }) => (colorTheme === 'dark' ? 'none' : 'block')};
  }
`

export const DarkModeButton = () => {
  const { theme, toggle } = useTheme()
  return (
    <DarkModeBtn colorTheme={theme} onClick={toggle}>
      <IoMdSunny className='sun' /> <IoMdMoon className='moon' />
      <span>{theme === 'light' ? 'Dark ' : 'Light '}Mode</span>
    </DarkModeBtn>
  )
}
