import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';
import { BtnAnchor, BtnOutlineAnchor } from '../Button/Button';
import {
	SectionTitle,
	SectionSubtitle,
	SectionParagraph,
} from '../Text/Text.js';

const StyledProjectInfo = styled.section`
	width: 100%;
	max-width: 1100px;
	margin: 10px auto 0;

	${media.down.xs} {
		padding: 0 20px;
	}
`;

const Grid = styled.div`
	display: grid;
	grid-gap: 100px;
	width: 100%;
	grid-template-columns: 2fr 1fr;

	${media.down.md} {
		grid-template-columns: 1fr;
		grid-gap: 20px;
	}
`;

const Buttons = styled.div`
	display: grid;
	grid-gap: 15px;
	align-self: start;
	justify-self: end;

	${media.down.md} {
		grid-template-columns: 1fr 1fr;
		justify-self: start;
	}
	${media.down.sm} {
		justify-self: stretch;
	}
	${media.down.xs} {
		grid-template-columns: 1fr;
		grid-gap: 10px;
	}
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
			<SectionTitle>{title}</SectionTitle>
			<Grid>
				<div>
					<SectionSubtitle>{subtitle}</SectionSubtitle>
					<SectionParagraph>{description}</SectionParagraph>
				</div>
				<Buttons>
					<BtnAnchor text="See Website" link={hostedLink} />
					<BtnOutlineAnchor text="View on GitHub" link={githubLink} />
				</Buttons>
			</Grid>
		</StyledProjectInfo>
	);
};

export default ProjectInfo;
