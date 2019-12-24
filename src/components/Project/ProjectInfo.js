import React from 'react';
import styled from 'styled-components';

import Container from '../Container/Container';
import { CardStyles, CardTitle, CardSubtitle, CardText } from '../Card/Card';

const StyledProjectInfo = styled.section`
	display: grid;
	grid-template-columns: auto auto;
	place-items: flex-start center;
`;

const Card = styled.div`${CardStyles};`;

const ProjectInfo = ({ title, subtitle, description, video }) => {
	return (
		<Container>
			<StyledProjectInfo>
				<Card style={{ width: '500px' }}>
					<CardTitle>{title}</CardTitle>
					<CardSubtitle>{subtitle}</CardSubtitle>
					<CardText>{description}</CardText>
				</Card>
				<img src={video} />
			</StyledProjectInfo>
		</Container>
	);
};

export default ProjectInfo;
