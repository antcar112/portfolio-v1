import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import NavLogo from './NavLogo';
import NavList from './NavList';
import Hamburger from './Hamburger';
import Drawer from './Drawer';

const StyledNav = styled.nav`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const Nav = ({ colorTheme, toggleTheme }) => {
	const [
		drawerOpen,
		setDrawerOpen,
	] = useState(false);
	return (
		<Header>
			<StyledNav>
				<NavLogo />
				<NavList colorTheme={colorTheme} toggleTheme={toggleTheme} />
				<Hamburger
					drawerOpen={drawerOpen}
					setDrawerOpen={setDrawerOpen}
				/>
				<Drawer
					drawerOpen={drawerOpen}
					colorTheme={colorTheme}
					toggleTheme={toggleTheme}
					setDrawerOpen={setDrawerOpen}
				/>
			</StyledNav>
		</Header>
	);
};

export default Nav;
