import React from 'react';

import Project from './Project';
import timeego from '../../images/timeego.png';
import cody from '../../images/cody-cameron.png';

const projects = [
	{
		title       : 'Timeego',
		subtitle    : 'Studying Web App',
		description :
			'Timeego is a web application designed to help students with track their time spent studying. It allows users to add courses, log their time studying, and view their total study time in each course.',
		link        : '#',
		image       : timeego,
		background  : '#10ffcb',
	},
	{
		title       : 'Cody Cameron',
		subtitle    : 'Artist Portfolio Site',
		description :
			'This is a portfolio website made for Cody Cameron, a graphic designer and artist based in Vancouver, BC.',
		link        : '#',
		image       : cody,
		background  : '#A3D9FF',
	},
	{
		title       : 'Project 3',
		subtitle    : 'Subtitle 3',
		description :
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel facilisis ipsum, non mollis dui. Cras vulputate volutpat tellus at tempor. Sed interdum magna eu luctus iaculis. Quisque in eleifend augue.',
		link        : '#',
		image       : timeego,
		background  : '#7E6B8F',
	},
];

const ProjectList = () => {
	return (
		<div>
			{projects.map((project, index) => {
				return <Project project={project} index={index} />;
			})}
		</div>
	);
};

export default ProjectList;
