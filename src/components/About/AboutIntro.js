import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';
import { CardStyles } from '../Card/Card';
import anthony from '../../images/anthony.jpg';

const StyledAboutIntro = styled.section`
	display: grid;
	grid-template-columns: auto auto;
	grid-template-rows: 1fr;
	align-items: flex-end;
	margin: 30px auto 100px;
	grid-template-areas: "image card";

	${media.down.lg} {
		margin: 30px auto 50px;
	}

	${media.down.md} {
		margin: 30px auto 25px;
		grid-template-columns: 1fr;
		grid-template-rows: auto auto;
		grid-template-areas: "image" "card";
	}
`;

const AboutImage = styled.img`
	max-width: 500px;
	position: relative;
	justify-self: flex-end;
	grid-area: image;
	right: -25px;

	${media.down.lg} {
		max-width: 400px;
		align-self: center;
		right: 0;
	}
	${media.down.md} {
		justify-self: center;
		max-width: 300px;
	}
`;

const AboutText = styled.div`
	${CardStyles};
	width: 100%;
	max-width: 550px;
	justify-self: flex-start;
	grid-area: card;
	position: relative;
	left: -25px;
	top: 50px;

	& h2 {
		font-family: ${({ theme }) => theme.font.cursive};
		font-weight: 400;
		color: ${({ theme }) => theme.color.primary};
		font-size: 3em;
		margin: 6px 0 20px;
	}

	& p {
		font-size: 1.2em;
		line-height: 1.5em;
		margin-bottom: 1.4em;
	}

	& .bold {
		font-weight: 700;
		color: ${({ theme }) => theme.color.primary};
	}

	${media.down.lg} {
		left: 0;
		top: 0;

		& h2 {
			font-size: 2.8em;
		}

		& p {
			font-size: 1.1em;
			line-height: 1.4em;
		}
	}

	${media.down.md} {
		top: -25px;
		justify-self: center;
	}

	${media.down.sm} {
		& h2 {
			font-size: 2.5em;
		}

		& p {
			font-size: 1em;
			line-height: 1.4em;
		}
	}
`;

const AboutIntro = () => {
	return (
		<StyledAboutIntro>
			<AboutImage src={anthony} alt="Anthony" />
			<AboutText className="about-text">
				<h2 className="cursive">I'm Anthony,</h2>
				<p>
					a software developer and designer. I am currently earning a{' '}
					<a
						className="bold"
						href="https://www.bcit.ca/study/programs/5500dipma"
					>
						Computer Systems Technology
					</a>{' '}
					diploma at the{' '}
					<a className="bold" href="https://www.bcit.ca/">
						British Columbia Institute of Technology
					</a>.
				</p>{' '}
				<p>
					I love how developing software allows me to build something
					new from scratch. I also enjoying the constant problem
					solving and learning.
				</p>
				<p>
					I currently live in the greater{' '}
					<span className="bold">Vancouver</span> area. In my spare
					time, I enjoy watching hockey, exploring new types of music,
					running and cooking.
				</p>
			</AboutText>
		</StyledAboutIntro>
	);
};

export default AboutIntro;
