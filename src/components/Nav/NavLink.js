import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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

const StyledNavLink = styled(AniLink)`${styles};`;

const StyledNavAnchor = styled.a`${styles};`;

const NavLink = ({ to, href, name, direction }) => {
	const themeContext = useContext(ThemeContext);

	if (href) {
		return (
			<li>
				<StyledNavAnchor href={href}>
					{name}
				</StyledNavAnchor>
			</li>
		);
	}
	return (
		<li>
			<StyledNavLink
				to={to}
				cover
				direction={direction}
				bg={themeContext.color.primary}
				duration={0.8}
				activeClassName="nav_link--active"
			>
				{name}
			</StyledNavLink>
		</li>
	);
};

export default NavLink;
