import React from 'react';

import WorkCard from './WorkCard';
import WorkImage from './WorkImage';
import StyledWorkItem from './WorkStyles';

const WorkItem = ({ project, index }) => {
	const { title, subtitle, description, link, background, image } = project;

	return (
		<StyledWorkItem background={background} index={index}>
			<WorkImage background={background} image={image} title={title} />
			<WorkCard
				title={title}
				subtitle={subtitle}
				description={description}
				link={link}
			/>
		</StyledWorkItem>
	);
};

export default WorkItem;
