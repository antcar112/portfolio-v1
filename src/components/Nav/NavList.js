import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';
import { NavLink, NavAnchor } from './NavLink';
import DarkModeButton from './DarkModeButton';
import SocialLinks from './SocialLinks';

const StyledNavList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;

	${media.down.md} {
		display: none;
	}

	& li {
		line-height: 60px;
	}
`;

const NavList = ({ colorTheme, toggleTheme }) => (
	<StyledNavList>
		<NavLink path="/" name="Work" direction="right" />
		<NavLink path="/about/" name="About" direction="left" />
		<NavAnchor path="mailto:anthony.j.caron@gmail.com" name="Contact" />
		<SocialLinks />
		<DarkModeButton colorTheme={colorTheme} toggleTheme={toggleTheme} />
	</StyledNavList>
);

export default NavList;
