import React from 'react';

import { volt as project } from '../content/projects.js';
import { voltTech as tech } from '../content/tech.js';
import Layout from '../components/layout';
import Project from '../components/Project/Project';

const Volt = () => (
	<Layout pageTitle={'Volt'}>
		<Project project={project} tech={tech} />
	</Layout>
);

export default Volt;
