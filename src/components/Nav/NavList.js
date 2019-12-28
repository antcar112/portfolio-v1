import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';
import NavLink from './NavLink';
import SocialLinks from './SocialLinks';
import DarkModeButton from './DarkModeButton';

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

const NavList = () => (
	<StyledNavList>
		<NavLink to="/" name="Work" direction="right" />
		<NavLink to="/about/" name="About" direction="left" />
		<NavLink
			href="mailto:anthony.j.caron@gmail.com"
			name="Contact"
		/>
		<SocialLinks />
		<DarkModeButton />
	</StyledNavList>
);

export default NavList;
