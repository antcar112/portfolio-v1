import React from 'react';
import styled from 'styled-components';

import { PageTitle } from '../Text/Text';
import Container from '../Container/Container';
import WorkList from './WorkList';

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
			<PageTitle>Projects</PageTitle>
			<Container>
				<WorkList />
			</Container>
		</StyledWork>
	);
};

export default Work;
