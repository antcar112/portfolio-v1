import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { media } from '../../utils/media.js';

const NavLogoContainer = styled(Link)`
	height: 100%;
	display: flex;
	align-items: center;
	text-decoration: none;
	line-height: 60px;
    transition: ${({ theme }) => theme.hoverTransition};

	& span {
		font-family: ${({ theme }) => theme.font.body};
		font-size: 1.35em;
		font-weight: 400;

		${media.down.lg} {
			font-size: 1.2em;
		}
		${media.down.sm} {
			font-size: 1.1em;
		}
		@media only screen and (max-width: 380px) {
			display: none;
		}
	}
	
	& .logo {
		height: 40px;
		width: 40px;
		margin-right: 20px;
		border: 3px solid  ${({ theme }) => theme.color.primary};
		display: inline-block;

		${media.down.lg} {
			height: 35px;
			width: 35px;
		}

		${media.down.sm} {
			height: 30px;
			width: 30px;
			margin-right: 10px;
		}
	}

    &:hover {
		color: ${({ theme }) => theme.color.textSecondary};
	}
`;

const NavLogo = () => {
	return (
		<NavLogoContainer to="/">
			<div className="logo" />
			<span>Anthony Caron</span>
		</NavLogoContainer>
	);
};

export default NavLogo;
