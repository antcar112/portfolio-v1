import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { media } from '../../utils/media.js';

const styles = css`
	text-decoration: none;
	font-size: 1.1em;
	display: block;
	padding: 0 20px;
	position: relative;
	color: ${({ theme }) => theme.color.text};
	transition: ${({ theme }) => theme.hoverTransition};

	${media.down.lg} {
		padding: 0 12px;
	}

	&.nav_link--active {
		color: ${({ theme }) => theme.color.text};

		&::before {
			content: '';
			height: 2px;
			background: ${({ theme }) => theme.color.primary};
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

const StyledNavLink = styled(Link)`${styles};`;

const StyledNavAnchor = styled.a`${styles};`;

export const NavLink = ({ path, name }) => {
	return (
		<li>
			<StyledNavLink to={path} activeClassName="nav_link--active">
				{name}
			</StyledNavLink>
		</li>
	);
};

export const NavAnchor = ({ path, name }) => {
	return (
		<li>
			<StyledNavAnchor href={path}>{name}</StyledNavAnchor>
		</li>
	);
};
