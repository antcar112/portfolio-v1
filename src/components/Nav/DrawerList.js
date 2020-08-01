import React, { useContext } from 'react'
import styled from 'styled-components'
import { IoMdFolder, IoMdMail, IoMdPerson, IoMdSunny, IoMdMoon } from 'react-icons/io'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import DrawerNavLink from 'src/components/Nav/DrawerNavLink'
import { GlobalThemeContext } from 'src/context/GlobalContextProvider'

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

const DrawerList = ({ setDrawerOpen }) => {
  const theme = useContext(GlobalThemeContext)

  const handleDarkMode = () => {
    theme.toggle()
    setDrawerOpen()
  }
  return (
    <NavList>
      <DrawerNavLink to='/' direction='right' name='Work' icon={<IoMdFolder />} />
      <DrawerNavLink to='/about/' direction='left' name='About' icon={<IoMdPerson />} />
      <DrawerNavLink href='mailto:anthony.j.caron@gmail.com' name='Contact' icon={<IoMdMail />} email />
      <DrawerNavLink href='https://github.com/antcar112' name='GitHub' icon={<FaGithub />} />
      <DrawerNavLink href='https://www.linkedin.com/in/anthony-caron/' name='LinkedIn' icon={<FaLinkedin />} />
      <DrawerNavLink
        onClick={handleDarkMode}
        name={theme.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        icon={theme.theme === 'light' ? <IoMdMoon /> : <IoMdSunny />}
      />
    </NavList>
  )
}

export default DrawerList
