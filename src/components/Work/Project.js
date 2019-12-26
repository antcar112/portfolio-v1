import React from 'react';
import Fade from 'react-reveal/Fade';

import { StyledProject, ImageContainer } from './ProjectStyles';
import { Card } from '../Card/Card';
import { SectionTitle, SectionSubtitle, SectionParagraph } from '../Text/Text';
import Button from '../Button/Button';

const Project = ({ project, index }) => {
	return (
		<StyledProject background={project.background} index={index}>
			<Fade bottom>
				<ImageContainer background={project.background}>
					<img src={project.image} alt={project.title} />
				</ImageContainer>
			</Fade>
			<Card>
				<SectionTitle card>{project.title}</SectionTitle>
				<SectionSubtitle card>{project.subtitle}</SectionSubtitle>
				<SectionParagraph card>{project.description}</SectionParagraph>
				<Button
					outline
					to={project.link}
					text="See More"
					direction="up"
				/>
			</Card>
		</StyledProject>
	);
};

export default Project;
