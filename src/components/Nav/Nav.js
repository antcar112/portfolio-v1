import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import NavLogo from './NavLogo';
import NavList from './NavList';

const StyledNav = styled.nav`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

const Nav = ({ colorTheme, toggleTheme }) => {
	return (
		<Header>
			<StyledNav>
				<NavLogo />
				<NavList colorTheme={colorTheme} toggleTheme={toggleTheme} />
			</StyledNav>
		</Header>
	);
};

export default Nav;
