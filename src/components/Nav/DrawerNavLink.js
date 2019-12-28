import React from 'react';
import styled from 'styled-components';

const NavListItem = styled.li`
	display: block;
	width: 100%;

	& button {
		border: none;
		background: none;
	}

	& a,
	& button {
		font-size: 1.1em;
		text-decoration: none;
		display: flex;
		justify-content: center;
		width: 100%;
		padding: 3vh;
		cursor: pointer;

		& div {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			max-width: 160px;

			& span {
				transition: ${({ theme }) =>
					theme.hoverTransition};
			}

			& svg {
				transition: ${({ theme }) =>
					theme.hoverTransition};
				font-size: 1.5em;
			}
		}

		&:hover div span,
		&:hover div svg {
			color: ${({ theme }) => theme.color.textSecondary};
		}

		&.nav_drawer_link--active div {
			color: ${({ theme }) => theme.color.text};

			&::before {
				content: '';
				height: 3px;
				background: ${({ theme }) =>
					theme.color.primary};
				position: absolute;
				bottom: -7px;
				left: -12px;
				right: -12px;
			}
		}
	}
`;

const DrawerNavLink = ({ children }) => {
	return <NavListItem>{children}</NavListItem>;
};

export default DrawerNavLink;
