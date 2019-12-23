import React from 'react';

import Project from './Project';
import projects from '../../content/projects.js';

const ProjectList = () => {
	return (
		<div>
			{projects.map((project, index) => {
				return (
					<Project
						project={project}
						index={index}
						key={project.title}
					/>
				);
			})}
		</div>
	);
};

export default ProjectList;
