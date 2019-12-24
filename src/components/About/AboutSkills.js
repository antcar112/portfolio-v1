import React from 'react';
import styled from 'styled-components';

import TechGrid from './TechGrid';
import { H2 } from '../Text/Text.js';

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
