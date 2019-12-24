import timeegoImg from '../images/timeego.png';
import timeegoVideo from '../images/videos/timeego.webp';
import cody from '../images/cody-cameron.png';
import pizza from '../images/pizza.png';

const projects = [
	{
		title       : 'Timeego',
		subtitle    : 'Studying Web App',
		description :
			'Timeego is a web application designed to help students with track their time spent studying. It allows users to add courses, log their time studying, and view their total study time in each course.',
		link        : '/timeego/',
		image       : timeegoImg,
		video       : timeegoVideo,
		background  : '#10ffcb',
		githubLink  : 'https://github.com/antcar112/timeego',
		hostedLink  : 'https://timeego-d54c4.firebaseapp.com/',
	},
	{
		title       : 'Cody Cameron',
		subtitle    : 'Artist Portfolio Website',
		description :
			'This is a portfolio website made for Cody Cameron, a graphic designer and artist based in Vancouver, BC.',
		link        : '/cody-cameron/',
		image       : cody,
		background  : '#A3D9FF',
		githubLink  : 'https://github.com/antcar112/cody-cameron-portfolio',
		hostedLink  : 'https://eloquent-wozniak-860d04.netlify.com/',
	},
	{
		title       : "Big General's",
		subtitle    : 'Pizza Restaurant Website',
		description :
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel facilisis ipsum, non mollis dui. Cras vulputate volutpat tellus at tempor. Sed interdum magna eu luctus iaculis. Quisque in eleifend augue.',
		link        : '/big-generals/',
		image       : pizza,
		background  : '#F7E8A4 ',
		githubLink  : 'https://github.com/antcar112/timeego',
		hostedLink  : 'https://timeego-d54c4.firebaseapp.com/',
	},
	{
		title       : 'Project 4',
		subtitle    : 'Pizza Restaurant Website',
		description :
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel facilisis ipsum, non mollis dui. Cras vulputate volutpat tellus at tempor. Sed interdum magna eu luctus iaculis. Quisque in eleifend augue.',
		link        : '/project-4/',
		image       : pizza,
		background  : '#7E6B8F',
		githubLink  : 'https://github.com/antcar112/timeego',
		hostedLink  : 'https://timeego-d54c4.firebaseapp.com/',
	},
];

export const timeego = projects[0];
export const codyCameron = projects[1];
export const bigGenerals = projects[0];

export default projects;
