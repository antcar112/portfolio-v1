import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';
import { Btn } from '../Button/Button';

const StyledHero = styled.div`
	width: 100%;
	height: 90vh;
	padding: 0 50px;
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
		color: ${({ theme }) => theme.color.primary};
		font-family: ${({ theme }) => theme.font.cursive};
		transition: ${({ theme }) => theme.hoverTransition};
	}

	${media.down.md} {
		font-size: 4.5em;
	}
	${media.down.sm} {
		font-size: 4em;
	}
	${media.down.xs} {
		font-size: 3em;
	}
`;

const HeroText = styled.span`
	font-size: 1.8em;

	${media.down.md} {
		font-size: 1.4em;
	}
	${media.down.sm} {
		font-size: 1.2em;
	}
	${media.down.xs} {
		font-size: 1.1em;
	}
`;

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
			<Btn text={'See my work'} handleClick={scrollDown} />
		</StyledHero>
	);
};

export default Hero;

const scrollDown = () => {
	document.getElementById('scroll-target').scrollIntoView({
		behavior : 'smooth',
	});
};
