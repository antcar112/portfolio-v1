import React from 'react';

import Project from './Project';
import timeego from '../../images/timeego.png';
import cody from '../../images/cody-cameron.png';
import pizza from '../../images/pizza.png';

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
		subtitle    : 'Artist Portfolio Website',
		description :
			'This is a portfolio website made for Cody Cameron, a graphic designer and artist based in Vancouver, BC.',
		link        : '#',
		image       : cody,
		background  : '#A3D9FF',
	},
	{
		title       : "Big General's",
		subtitle    : 'Pizza Restaurant Website',
		description :
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel facilisis ipsum, non mollis dui. Cras vulputate volutpat tellus at tempor. Sed interdum magna eu luctus iaculis. Quisque in eleifend augue.',
		link        : '#',
		image       : pizza,
		background  : '#F7E8A4 ',
	},
	{
		title       : "Big General's",
		subtitle    : 'Pizza Restaurant Website',
		description :
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel facilisis ipsum, non mollis dui. Cras vulputate volutpat tellus at tempor. Sed interdum magna eu luctus iaculis. Quisque in eleifend augue.',
		link        : '#',
		image       : pizza,
		background  : '#7E6B8F',
	},
	{
		title       : "Big General's",
		subtitle    : 'Pizza Restaurant Website',
		description :
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel facilisis ipsum, non mollis dui. Cras vulputate volutpat tellus at tempor. Sed interdum magna eu luctus iaculis. Quisque in eleifend augue.',
		link        : '#',
		image       : pizza,
		background  : '#EE4266',
	},
	{
		title       : "Big General's",
		subtitle    : 'Pizza Restaurant Website',
		description :
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel facilisis ipsum, non mollis dui. Cras vulputate volutpat tellus at tempor. Sed interdum magna eu luctus iaculis. Quisque in eleifend augue.',
		link        : '#',
		image       : pizza,
		background  : '#FFD23F',
	},
	{
		title       : "Big General's",
		subtitle    : 'Pizza Restaurant Website',
		description :
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel facilisis ipsum, non mollis dui. Cras vulputate volutpat tellus at tempor. Sed interdum magna eu luctus iaculis. Quisque in eleifend augue.',
		link        : '#',
		image       : pizza,
		background  : '#FC440F',
	},
];

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
