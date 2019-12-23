import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';

const StyledFooter = styled.footer`
	margin: 0;
	padding: 0;
	width: 100%;
	background: ${({ theme }) => theme.color.bg};
	transition: ${({ theme }) => theme.hoverTransition};
	display: flex;
	justify-content: space-evenly;
	padding: 1em;
	color: ${({ theme }) => theme.color.textSecondary};
	text-align: center;

	${media.down.md} {
		flex-direction: column;
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<span>© Anthony Caron {new Date().getFullYear()}.</span>
			<span>Website designed and developed by Anthony Caron.</span>
		</StyledFooter>
	);
};

export default Footer;
