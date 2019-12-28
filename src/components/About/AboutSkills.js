import React from 'react';
import styled from 'styled-components';

import TechGrid from './TechGrid';
import { SectionTitle } from '../Text/Text.js';

const StyledAboutSkills = styled.section``;

const AboutSkills = () => (
	<StyledAboutSkills>
		<SectionTitle center>My Skills</SectionTitle>
		<TechGrid />
	</StyledAboutSkills>
);

export default AboutSkills;
