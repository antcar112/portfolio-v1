import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Container from '../components/Container/Container';
import AboutContent from '../components/About/AboutContent';

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
					<AboutContent />
				</Container>
			</StyledAbout>
		</Layout>
	);
};

export default About;
