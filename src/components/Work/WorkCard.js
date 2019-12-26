import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';
import Button from '../Button/Button';
import Card from '../Card/Card';
import { SectionTitle, SectionSubtitle, SectionParagraph } from '../Text/Text';

const StyledWorkCard = styled(Card)`
	${media.down.lg} {
		align-self: flex-start;
		margin: -100px auto -80px;
		width: 90%;
	}
`;

const WorkCard = ({ title, subtitle, description, link }) => (
	<StyledWorkCard>
		<SectionTitle card>{title}</SectionTitle>
		<SectionSubtitle card>{subtitle}</SectionSubtitle>
		<SectionParagraph card>{description}</SectionParagraph>
		<Button outline to={link} text="See More" direction="up" />
	</StyledWorkCard>
);

export default WorkCard;
