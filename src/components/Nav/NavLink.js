import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNavLink = styled(Link)`
	text-decoration: none;
	font-size: 1.1em;
	display: block;
	padding: 0 20px;
	position: relative;
	color: ${({ theme }) => theme.color.text};
	transition: ${({ theme }) => theme.hoverTransition};

	&.nav_link--active {
		color: ${({ theme }) => theme.color.text};

		&::before {
			content: '';
			height: 2px;
			background: ${({ theme }) => theme.sharedColor.primary};
			position: absolute;
			bottom: 15px;
			left: 10px;
			right: 10px;
		}
	}

	&:hover {
		color: ${({ theme }) => theme.color.textSecondary};
	}
`;

const NavLink = ({ path, name }) => {
	return (
		<li>
			<StyledNavLink to={path} activeClassName="nav_link--active">
				{name}
			</StyledNavLink>
		</li>
	);
};

export default NavLink;
