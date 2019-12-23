import React from 'react';
import styled from 'styled-components';

import { media } from '../../utils/media.js';
import TechGrid from './TechGrid';
import { H2 } from './Headings';

const StyledAboutSkills = styled.section``;

const AboutSkills = () => {
	return (
		<StyledAboutSkills>
			<H2>My Skills</H2>
			<TechGrid />
		</StyledAboutSkills>
	);
};

export default AboutSkills;
