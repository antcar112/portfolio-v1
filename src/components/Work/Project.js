import React from 'react';
import styled, { css } from 'styled-components';

import { BtnOutlineLink } from '../Button/Button';

const evenStyles = css`
	grid-template-columns: 2fr 1fr;
	grid-template-areas: "image card";
	background: linear-gradient(
		to right,
		${props => props.background} 0%,
		${props => props.background} 75%,
		rgba(0, 0, 0, 0) 75%,
		rgba(0, 0, 0, 0) 100%
	);
`;
const oddStyles = css`
	grid-template-columns: 1fr 2fr;
	grid-template-areas: "card image";
	background: linear-gradient(
		to left,
		${props => props.background} 0%,
		${props => props.background} 75%,
		rgba(0, 0, 0, 0) 75%,
		rgba(0, 0, 0, 0) 100%
	);
`;

const StyledProject = styled.div`
	margin-top: 90px;
	width: 100%;
	display: grid;
	${props => (props.index % 2 === 0 ? evenStyles : oddStyles)};

	align-items: center;
`;

const WorkCard = styled.div`
	grid-area: card;
	box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.15);
	padding: 30px;
	background: ${({ theme }) => theme.color.bgCard};
	transition: ${({ theme }) => theme.hoverTransition};
`;

const CardTitle = styled.h2`margin-bottom: 10px;`;
const CardSubtitle = styled.h3`margin-bottom: 30px;`;
const CardText = styled.p`
	margin-bottom: 30px;
	line-height: 1.7em;
`;

const ImageContainer = styled.div`
	grid-area: image;
	height: 600px;
	display: flex;
	justify-content: center;
	align-items: center;

	& img {
		height: 80%;
	}
`;

const Project = ({ project, index }) => {
	return (
		<StyledProject background={project.background} index={index}>
			<ImageContainer>
				<img src={project.image} />
			</ImageContainer>
			<WorkCard>
				<CardTitle>{project.title}</CardTitle>
				<CardSubtitle>{project.subtitle}</CardSubtitle>
				<CardText>{project.description}</CardText>
				<BtnOutlineLink to={project.link}>See More</BtnOutlineLink>
			</WorkCard>
		</StyledProject>
	);
};

export default Project;
