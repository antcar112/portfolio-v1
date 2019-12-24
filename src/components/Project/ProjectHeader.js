import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const StyledHeader = styled.section`
	width: 100%;
	padding-top: 2em;
	& h2 {
		color: ${({ theme }) => theme.color.primary};
		font-weight: 400;
		text-align: center;
		margin-bottom: 1em;
	}
`;
const ColorSection = styled.div`
	width: 100%;
	height: 80vh;
	background: ${({ background }) => background};
	display: grid;
	place-items: center center;

	& img {
		height: 80%;
	}
`;

const ProjectHeader = ({ background, title, subtitle, image }) => {
	return (
		<StyledHeader>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
			<ColorSection background={background}>
				<Fade bottom>
					<img src={image} alt={title} />
				</Fade>
			</ColorSection>
		</StyledHeader>
	);
};

export default ProjectHeader;
