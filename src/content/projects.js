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
			`Timeego was the result of a four-month project class, in which our team of three conceived, designed and developed a web application. We used an Agile design methodology to build this app. The final project was judged on good UX/UI, complete documentation, and overall functionality.`,
			`The original pitch for this app was to build something that would allow students to log their time studying, and view their total study time in each course. This would help students track, manage and ultimately improve their study habits. I'm proud to say the finished product lives up to this original idea.`,
			`The feature I'm most proud of in this app is the working stopwatch that can be used to track study times. It was built using object-oriented programming, and uses local storage to save it's state. This allows the time to persist across different page loads without the need for a true backend.`,
			`When we started coding, we quickly realized we would have a lot of different JavaScript files. To improve our organization, implemented a Model-View-Controller design pattern. This ultimately made the finished product much easier to navigate.`,
		],
		features    : [
			`A working stopwatch that is able to track times across different page loads.`,
			`Allows users to add, edit and delete courses.`,
			`Developed using the Agile design methodology.`,
			`Code organized using the MVC design pattern.`,
			`Uses Google Firebase for a database and for authorization.`,
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
			`When one of my close friends asked me to build him a portfolio website, I jumped on the opportunity. I saw this as a great chance to force myself to learn something new while practicing my web development skills.`,
			`My biggest challenge building this site was making it so Cody could manage his own content without any need for me to change anything. Originally, I planned on using the MERN stack to accomplish this. However, when I heard about Gatsby and how easy it is to dynamically render pages I opted to try that approach instead.`,
			`Ultimately, the finished site is built on the JAM stack. It uses Gatsby for the front-end and the Contentful headless CMS to store the sites content. GraphQL then queries Contentful to get content to display on the site. This setup means Cody can manage all his own content.`,
		],
		features    : [
			`Uses the Contentful headless CMS to allow Cody to manage his own content.`,
			`Gatsby automatically re-renders pages as content on the CMS is changed.`,
			`The updated site is then automatically redeployed on Netlify.`,
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
			`This site was a project for the first web development course I took. The goal of the project was to design a static website for a small business of our choice using HTML, CSS and some very basic JavaScript.`,
			`There was a very emphasis on making the site well designed and easy to navigate. Because of this, I decided to use a colorful design to catch the users eye. I also took this project as an opportunity to use Sass for the first time. Doing this really increased the speed that I could write my CSS.`,
		],
		features    : [
			`A static HTML website focused on a clean design and ease of use.`,
			`Uses Sass to speed up process of writing CSS.`,
		],
	},
];

export const timeego = projects[0];
export const codyCameron = projects[1];
export const bigGenerals = projects[2];

export default projects;

// Future Background Color #7E6B8F
