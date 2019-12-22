import React from 'react';
import styled from 'styled-components';

import Container from '../Container/Container';
import { BtnOutlineLink } from '../Button/Button';

const Heading = styled.h1`text-align: center;`;

const Project = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledWork = styled.section`
	width: 100%;
	background: ${({ theme }) => theme.color.bg};
	transition: ${({ theme }) => theme.hoverTransition};
`;

const WorkCard = styled.div`
	box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.15);
	padding: 30px;
	width: 500px;
	background: ${({ theme }) => theme.color.bgCard};
	transition: ${({ theme }) => theme.hoverTransition};
	position: relative;
	left: -80px;
`;

const CardTitle = styled.h2``;
const CardSubtitle = styled.h3`margin-bottom: 30px;`;
const CardText = styled.p`margin-bottom: 30px;`;

const WorkItem = styled.div`
	width: 900px;
	height: 500px;
	background: #10ffcb;
	position: relative;
	left: 80px;
`;

const Work = () => {
	return (
		<StyledWork>
			<Container>
				<Heading>My Work</Heading>
				<Project>
					<WorkItem />
					<WorkCard>
						<CardTitle>Project Title</CardTitle>
						<CardSubtitle>Project Subtitle</CardSubtitle>
						<CardText>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Tempora, magnam.
						</CardText>
						<BtnOutlineLink to="#">See More</BtnOutlineLink>
					</WorkCard>
				</Project>
			</Container>
		</StyledWork>
	);
};

export default Work;
