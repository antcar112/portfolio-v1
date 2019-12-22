import React from 'react';
import styled from 'styled-components';

import Container from '../Container/Container';
import ProjectList from './ProjectList';

const Heading = styled.h1`text-align: center;`;

const StyledWork = styled.section`
	width: 100%;
	background: ${({ theme }) => theme.color.bg};
	transition: ${({ theme }) => theme.hoverTransition};
`;

const Work = () => {
	return (
		<StyledWork id="scroll-target">
			<Container>
				<Heading>My Work</Heading>
				<ProjectList />
			</Container>
		</StyledWork>
	);
};

export default Work;
