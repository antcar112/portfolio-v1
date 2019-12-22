import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavLogoContainer = styled(Link)`
	height: 100%;
	display: flex;
	align-items: center;
	font-family: ${({ theme }) => theme.font.cursive};
	font-size: 1.7em;
	text-decoration: none;
	line-height: 60px;
    transition: ${({ theme }) => theme.hoverTransition};
	
	& .logo {
		height: 40px;
		width: 40px;
		margin-right: 20px;
		border: 3px solid ${({ theme }) => theme.sharedColor.primary};
		display: inline-block;
	}

    &:hover {
		color: ${({ theme }) => theme.color.textSecondary};
	}
`;

const NavLogo = () => {
	return (
		<NavLogoContainer to="/">
			<div className="logo" />
			Anthony Caron
		</NavLogoContainer>
	);
};

export default NavLogo;
