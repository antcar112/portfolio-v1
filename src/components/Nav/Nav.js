import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './Header';
import NavLogo from './NavLogo';
import NavList from './NavList';
import Hamburger from './Hamburger';
import NavDrawer from './NavDrawer';

const StyledNav = styled.nav`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const Nav = ({ colorTheme, toggleTheme }) => {
	const [
		drawOpen,
		setDrawOpen,
	] = useState(false);
	return (
		<Header>
			<StyledNav>
				<NavLogo />
				<NavList colorTheme={colorTheme} toggleTheme={toggleTheme} />
				<Hamburger drawOpen={drawOpen} setDrawOpen={setDrawOpen} />
				<NavDrawer
					drawOpen={drawOpen}
					colorTheme={colorTheme}
					toggleTheme={toggleTheme}
				/>
			</StyledNav>
		</Header>
	);
};

export default Nav;
