import React from 'react';

import { bigGenerals as project } from '../content/projects.js';
import { generalsTech as tech } from '../content/tech.js';
import Layout from '../components/layout';
import Project from '../components/Project/Project';

const BigGenerals = () => (
	<Layout pageTitle={"Big General's"}>
		<Project project={project} tech={tech} />
	</Layout>
);

export default BigGenerals;
