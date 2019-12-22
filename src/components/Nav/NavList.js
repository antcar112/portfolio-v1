import React from 'react';
import styled from 'styled-components';

import NavLink from './NavLink';
import DarkModeButton from './DarkModeButton';
import SocialLinks from './SocialLinks';

const StyledNavList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;

	& li {
		line-height: 60px;
	}
`;

const NavList = ({ colorTheme, toggleTheme }) => (
	<StyledNavList>
		<NavLink path="/" name="Work" />
		<NavLink path="/about/" name="About" />
		<NavLink path="/contact/" name="Contact" />
		<SocialLinks />
		<DarkModeButton colorTheme={colorTheme} toggleTheme={toggleTheme} />
	</StyledNavList>
);

export default NavList;
