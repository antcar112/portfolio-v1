import React from 'react';
import styled from 'styled-components';

import { CardTitle, CardSubtitle, CardText } from '../Card/Card';
import { BtnAnchor, BtnOutlineAnchor } from '../Button/Button';

const StyledProjectInfo = styled.section`
	display: grid;
	grid-gap: 100px;
	width: 100%;
	max-width: 1100px;
	grid-template-columns: 2fr 1fr;
	margin: 0 auto;
`;

const Buttons = styled.div`
	display: grid;
	grid-gap: 20px;
	align-self: center;
	justify-self: end;
`;

const ProjectInfo = ({
	title,
	subtitle,
	description,
	githubLink,
	hostedLink,
}) => {
	return (
		<StyledProjectInfo>
			<div>
				<CardTitle>{title}</CardTitle>
				<CardSubtitle>{subtitle}</CardSubtitle>
				<CardText>{description}</CardText>
			</div>
			<Buttons>
				<BtnAnchor text="View Project" link={hostedLink} />
				<BtnOutlineAnchor text="View on GitHub" link={githubLink} />
			</Buttons>
		</StyledProjectInfo>
	);
};

export default ProjectInfo;
