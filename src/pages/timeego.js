import React from 'react';
import styled from 'styled-components';

import projects from '../content/projects.js';
import Layout from '../components/layout';
import ProjectHeader from '../components/Project/ProjectHeader';
import ProjectInfo from '../components/Project/ProjectInfo';

import timeegoVideo from '../images/videos/timeego.webp';
const timeego = projects[0];
const { title, subtitle, background, description, image } = timeego;

const ProjectContainer = styled.div`
	background: ${({ theme }) => theme.color.bg};
	transition: ${({ theme }) => theme.hoverTransition};
`;

const Timeego = () => (
	<Layout>
		<ProjectContainer>
			<ProjectHeader
				background={background}
				title={title}
				subtitle={subtitle}
				image={image}
			/>
			<ProjectInfo
				title={title}
				subtitle={subtitle}
				description={description}
				video={timeegoVideo}
			/>
		</ProjectContainer>
	</Layout>
);

export default Timeego;
