import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';
import TechGrid from './TechGrid';
import { Card, CardSubtitle } from '../Card/Card';
import anthony from '../../images/anthony.jpg';

const Flex = styled.div`
	margin: 30px 0 80px;
	display: flex;
	justify-content: center;
	width: 100%;

	& img {
		width: 500px;
		position: relative;
		right: -25px;
	}
`;

const AboutText = styled.article`
	width: 100%;
	max-width: 550px;
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
`;

const AboutContent = () => {
	return (
		<div>
			<Flex>
				<img src={anthony} alt="Anthony" />
				<AboutText>
					<Card>
						<h2 className="cursive">I'm Anthony,</h2>
						<p>
							a software developer and designer. I am currently
							earning a{' '}
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
							I love how developing software allows me to build
							something new from scratch. I also enjoying the
							constant problem solving and learning.
						</p>
						<p>
							I currently live in the greater{' '}
							<span className="bold">Vancouver</span> area. In my
							spare time, I enjoy watching hockey, exploring new
							types of music, running and cooking.
						</p>
					</Card>
				</AboutText>
			</Flex>

			<article>
				<h2>My Skills</h2>
				<TechGrid />
			</article>
			<h2>Contact Info</h2>
		</div>
	);
};

export default AboutContent;
