import { useTheme } from '@src/context'
import { DrawerNavLink } from '@src/ui/layout/nav/components'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdFolder, IoMdMail, IoMdMoon, IoMdPerson, IoMdSunny } from 'react-icons/io'
import styled from 'styled-components'

const NavList = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const DrawerList = ({ setDrawerOpen }) => {
  const { theme, toggle } = useTheme()

  const handleDarkMode = () => {
    toggle()
    setDrawerOpen()
  }
  return (
    <NavList>
      <DrawerNavLink direction='right' icon={<IoMdFolder />} name='Work' to='/' />
      <DrawerNavLink direction='left' icon={<IoMdPerson />} name='About' to='/about/' />
      <DrawerNavLink
        email
        href='mailto:anthony.j.caron@gmail.com'
        icon={<IoMdMail />}
        name='Contact'
      />
      <DrawerNavLink href='https://github.com/antcar112' icon={<FaGithub />} name='GitHub' />
      <DrawerNavLink
        href='https://www.linkedin.com/in/anthony-caron/'
        icon={<FaLinkedin />}
        name='LinkedIn'
      />
      <DrawerNavLink
        icon={theme === 'light' ? <IoMdMoon /> : <IoMdSunny />}
        name={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        onClick={handleDarkMode}
      />
    </NavList>
  )
}
