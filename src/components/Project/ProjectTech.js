import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';
import TechItem from '../About/TechItem';
import {
	SectionSubtitle,
	SectionParagraph,
} from '../Text/Text.js';

const StyledProjectTech = styled.div`
	margin: 50px auto 0;
	${media.down.md} {
		margin-bottom: 30px;
	}
`;

const TechGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-gap: 30px 20px;
	margin: 50px auto 20px;

	${media.down.lg} {
		grid-template-columns: repeat(7, 1fr);
	}
	${media.down.md} {
		grid-template-columns: repeat(6, 1fr);
		grid-gap: 35px 20px;
	}
	${media.down.sm} {
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 35px 10px;
	}
	${media.down.xs} {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const ProjectTech = ({ tech }) => (
	<StyledProjectTech>
		<SectionSubtitle>Tools Used</SectionSubtitle>
		<SectionParagraph>
			Here are some of the key pieces of technology used in
			building and designing this project.
		</SectionParagraph>
		<TechGrid>
			{tech.map(t => <TechItem tech={t} key={t.name} />)}
		</TechGrid>
	</StyledProjectTech>
);

export default ProjectTech;
