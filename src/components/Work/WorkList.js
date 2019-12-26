import React from 'react';

import WorkItem from './WorkItem';
import projects from '../../content/projects.js';

const WorkList = () => {
	return (
		<div>
			{projects.map((project, index) => (
				<WorkItem project={project} index={index} key={project.title} />
			))}
		</div>
	);
};

export default WorkList;
