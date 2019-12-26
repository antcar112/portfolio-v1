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

const Nav = () => {
	const [
		drawerOpen,
		setDrawerOpen,
	] = useState(false);

	return (
		<Header>
			<StyledNav>
				<NavLogo />
				<NavList />
				<Hamburger
					drawerOpen={drawerOpen}
					setDrawerOpen={setDrawerOpen}
				/>
				<Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
			</StyledNav>
		</Header>
	);
};

export default Nav;
