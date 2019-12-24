import React from 'react';
import styled from 'styled-components';

import TechItem from '../About/TechItem';
import { CardTitle, CardText } from '../Card/Card';

const StyledProjectTech = styled.section`
	width: 100%;
	max-width: 1100px;
	margin: 50px auto;
`;

const TechGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(9, 1fr);
	margin: 50px auto;
`;

const ProjectTech = ({ tech }) => {
	return (
		<StyledProjectTech>
			<CardTitle>Tools Used</CardTitle>
			<CardText>
				Some of the key pieces of technology I used to create this
				project.
			</CardText>
			<TechGrid>
				{tech.map(t => <TechItem tech={t} key={t.name} />)}
			</TechGrid>
		</StyledProjectTech>
	);
};

export default ProjectTech;
