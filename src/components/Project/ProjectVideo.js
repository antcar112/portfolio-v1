import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.section`
	width: 100%;
	max-width: 1100px;
	display: grid;
	place-items: center center;
	margin: 60px auto 0;

	& img {
	}
`;

const ProjectVideo = ({ video, title }) => {
	return (
		<VideoContainer>
			<img src={video} alt={title} />
		</VideoContainer>
	);
};

export default ProjectVideo;
