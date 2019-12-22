import React from 'react';
import styled from 'styled-components';

import { BtnLink } from '../Button/Button';

const StyledHero = styled.div`
	width: 100%;
	height: 90vh;
	background: ${({ theme }) => theme.color.bg};
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	transition: ${({ theme }) => theme.hoverTransition};
`;

const Cursive = styled.h1`
	font-family: ${({ theme }) => theme.font.cursive};
	font-weight: 400;
	color: ${({ theme }) => theme.color.text};
	font-size: 5.5em;
	margin-bottom: 0px;
	transition: ${({ theme }) => theme.hoverTransition};

	& span {
		color: ${({ theme }) => theme.sharedColor.primary};
		font-family: ${({ theme }) => theme.font.cursive};
		transition: ${({ theme }) => theme.hoverTransition};
	}
`;

const HeroText = styled.span`font-size: 1.8em;`;

const Hero = () => {
	return (
		<StyledHero>
			<div>
				<Cursive>
					Hello, I'm <span>Anthony</span>
				</Cursive>
				<HeroText>
					I’m a software developer and designer from Vancouver, BC
				</HeroText>
			</div>
			<BtnLink to="#">See my work</BtnLink>
		</StyledHero>
	);
};

export default Hero;
