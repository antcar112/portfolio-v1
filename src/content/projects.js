import timeegoImg from '../images/timeego.png';
import timeegoVideo from '../images/videos/timeegoVideo.webp';
import cody from '../images/cody-cameron.png';
import codyVideo from '../images/videos/codyVideo.webp';
import pizza from '../images/pizza.png';
import pizzaVideo from '../images/videos/bigGeneralsVideo.webp';

const projects = [
	{
		title       : 'Timeego',
		subtitle    : 'Studying Web App',
		description : `Timeego is a web app designed to help students track their time spent studying. It allows users to add courses, log their time studying, and view their total study time in each course.`,
		link        : '/timeego/',
		image       : timeegoImg,
		video       : timeegoVideo,
		background  : '#10ffcb',
		githubLink  : 'https://github.com/antcar112/timeego',
		hostedLink  : 'https://timeego-d54c4.firebaseapp.com/',
		devDesc     : [
			`The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.`,
			`The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.`,
		],
		features    : [
			`Just some place holder info`,
			`I'll come back and write these later`,
			`This is the last one for now, but there should be 3 to 5 per project`,
		],
	},
	{
		title       : 'Cody Cameron',
		subtitle    : 'Artist Portfolio Website',
		description :
			'A portfolio website made for Cody Cameron, a graphic designer and artist based in Vancouver, BC.',
		link        : '/cody-cameron/',
		image       : cody,
		video       : codyVideo,
		background  : '#A3D9FF',
		githubLink  :
			'https://github.com/antcar112/cody-cameron-portfolio',
		hostedLink  :
			'https://eloquent-wozniak-860d04.netlify.com/',
		devDesc     : [
			`The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.`,
			`The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.`,
		],
		features    : [
			`Uses the Contentful headless CMS to allow Cody to manage his own content.`,
			`I'll come back and write these later`,
			`This is the last one for now, but there should be 3 to 5 per project`,
		],
	},
	{
		title       : "Big General's",
		subtitle    : 'Pizza Restaurant Website',
		description :
			"A website for Big General's, a fictional pizza restaurant.",
		link        : '/big-generals/',
		image       : pizza,
		video       : pizzaVideo,
		background  : '#F7E8A4 ',
		githubLink  :
			'https://github.com/antcar112/big-generals-pizza',
		hostedLink  :
			'https://happy-jepsen-721e54.netlify.com/index.html',
		devDesc     : [
			`The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.`,
			`The placeholder text, beginning with the line “Lorem ipsum dolor sit amet, consectetur adipiscing elit”, looks like Latin because in its youth, centuries ago, it was Latin.`,
		],
		features    : [
			`Placeholder`,
			`I'll come back and write these later`,
			`This is the last one for now, but there should be 3 to 5 per project`,
		],
	},
];

export const timeego = projects[0];
export const codyCameron = projects[1];
export const bigGenerals = projects[2];

export default projects;

// Future Background Color #7E6B8F
