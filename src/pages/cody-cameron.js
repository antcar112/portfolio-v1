import React from 'react';
import styled from 'styled-components';

import projects from '../content/projects.js';
import Layout from '../components/layout';
import ProjectHeader from '../components/Project/ProjectHeader';

const codyCameron = projects[1];
const { title, subtitle, background, description, image } = codyCameron;

const ProjectContainer = styled.div`
	background: ${({ theme }) => theme.color.bg};
	transition: ${({ theme }) => theme.hoverTransition};
`;

const CodyCameron = () => (
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

export default CodyCameron;
