import React from 'react';
import styled from 'styled-components';

import projects from '../content/projects.js';
import Layout from '../components/layout';
import ProjectHeader from '../components/Project/ProjectHeader';

const bigGenerals = projects[2];
const { title, subtitle, background, description, image } = bigGenerals;

const ProjectContainer = styled.div`
	background: ${({ theme }) => theme.color.bg};
	transition: ${({ theme }) => theme.hoverTransition};
`;

const BigGenerals = () => (
	<Layout>
		<ProjectContainer>
			<ProjectHeader
				background={background}
				title={title}
				subtitle={subtitle}
				image={image}
			/>
		</ProjectContainer>
	</Layout>
);

export default BigGenerals;
