import React from 'react';
import styled from 'styled-components';

import { timeego as project } from '../content/projects.js';
import { timeegoTech as tech } from '../content/tech.js';
import Layout from '../components/layout';
import Container from '../components/Container/Container';
import ProjectHeader from '../components/Project/ProjectHeader';
import ProjectInfo from '../components/Project/ProjectInfo';
import ProjectVideo from '../components/Project/ProjectVideo';
import ProjectDev from '../components/Project/ProjectDev';
import { BackBtnOutline } from '../components/Button/Button';

const {
	title,
	subtitle,
	background,
	description,
	image,
	githubLink,
	hostedLink,
	video,
	devDesc,
	features,
} = project;

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
			<Container>
				<ProjectInfo
					title={title}
					subtitle={subtitle}
					description={description}
					githubLink={githubLink}
					hostedLink={hostedLink}
				/>
				<ProjectVideo video={video} title={title} />
				<ProjectDev devDesc={devDesc} features={features} tech={tech} />
				<BackBtnOutline path="/" text="Go Back" direction="down" />
			</Container>
		</ProjectContainer>
	</Layout>
);

export default Timeego;
