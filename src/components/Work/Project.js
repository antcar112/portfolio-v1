import React from 'react';
import Fade from 'react-reveal/Fade';

import { StyledProject, ImageContainer } from './ProjectStyles';
import { Card, CardTitle, CardSubtitle, CardText } from '../Card/Card';
import { BtnOutlineAniLink } from '../Button/Button';

const Project = ({ project, index }) => {
	return (
		<StyledProject background={project.background} index={index}>
			<Fade bottom>
				<ImageContainer background={project.background}>
					<img src={project.image} alt={project.title} />
				</ImageContainer>
			</Fade>
			<Card>
				<CardTitle>{project.title}</CardTitle>
				<CardSubtitle>{project.subtitle}</CardSubtitle>
				<CardText>{project.description}</CardText>
				<BtnOutlineAniLink
					path={project.link}
					text="See More"
					direction="up"
				/>
			</Card>
		</StyledProject>
	);
};

export default Project;
