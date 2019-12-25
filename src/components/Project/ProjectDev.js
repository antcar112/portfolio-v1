import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';
import ProjectFeatures from './ProjectFeatures';
import ProjectTech from './ProjectTech';
import { SectionTitle, SectionParagraph } from '../Text/Text.js';

const StyledProjectDev = styled.section`
	width: 100%;
	max-width: 1100px;
	margin: 60px auto 0;

	${media.down.xs} {
		padding: 0 20px;
	}
`;

const ProjectDev = ({ devDesc, tech, features }) => {
	return (
		<StyledProjectDev>
			<SectionTitle>Project Development</SectionTitle>
			{devDesc.map((paragraph, i) => (
				<SectionParagraph key={`DevDesc-${i}`}>
					{paragraph}
				</SectionParagraph>
			))}

			<ProjectFeatures features={features} />
			<ProjectTech tech={tech} />
		</StyledProjectDev>
	);
};

export default ProjectDev;
