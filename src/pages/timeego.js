import React from 'react';

import { timeego as project } from '../content/projects.js';
import { timeegoTech as tech } from '../content/tech.js';
import Layout from '../components/layout';
import Project from '../components/Project/Project';

const Timeego = () => (
	<Layout pageTitle={'Timeego'}>
		<Project project={project} tech={tech} />
	</Layout>
);

export default Timeego;
