import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Container from '../components/Container/Container';
import AboutIntro from '../components/About/AboutIntro';
import AboutSkills from '../components/About/AboutSkills';
import AboutContact from '../components/About/AboutContact';

const StyledAbout = styled.section`
	width: 100%;
	background: ${({ theme }) => theme.color.bg};
	transition: ${({ theme }) => theme.hoverTransition};
`;

const About = () => {
	return (
		<Layout>
			<StyledAbout>
				<Container>
					<h1>About Me</h1>
					<AboutIntro />
					<AboutSkills />
					<AboutContact />
				</Container>
			</StyledAbout>
		</Layout>
	);
};

export default About;
