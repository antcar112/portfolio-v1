import React from 'react';
import styled from 'styled-components';

import Container from '../Container/Container';
import ProjectList from './ProjectList';

const Heading = styled.h1``;

const StyledWork = styled.section`
	width: 100%;
	background: ${({ theme }) => theme.color.bg};
	transition: ${({ theme }) => theme.hoverTransition};
`;

const ScrollTarget = styled.div`
	width: 1px;
	height: 1px;
	background: none;
	position: relative;
	top: -90px;
`;

const Work = () => {
	return (
		<StyledWork>
			<ScrollTarget id="scroll-target" />
			<Heading>Projects</Heading>
			<Container>
				<ProjectList />
			</Container>
		</StyledWork>
	);
};

export default Work;
