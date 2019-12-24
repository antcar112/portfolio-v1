import React from 'react';
import styled from 'styled-components';

import { codyCameron } from '../content/projects.js';
import { codyTech as tech } from '../content/tech.js';
import Layout from '../components/layout';
import Container from '../components/Container/Container';
import ProjectHeader from '../components/Project/ProjectHeader';
import ProjectInfo from '../components/Project/ProjectInfo';
import ProjectTech from '../components/Project/ProjectTech';
import { BackBtnOutline } from '../components/Button/Button';

const {
	title,
	subtitle,
	background,
	description,
	image,
	githubLink,
	hostedLink,
} = codyCameron;

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
			<Container>
				<ProjectInfo
					title={title}
					subtitle={subtitle}
					description={description}
					githubLink={githubLink}
					hostedLink={hostedLink}
				/>
				<img
					src={image}
					style={{ display: 'block', margin: '30px auto' }}
				/>
				<ProjectTech tech={tech} />
				<p>Screenshot?</p>
				<p>Motivation + Design Details?</p>
			</Container>
			<BackBtnOutline path="/" text="Back" direction="down" />
		</ProjectContainer>
	</Layout>
);

export default CodyCameron;
