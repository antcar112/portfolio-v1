import React from 'react';

import { codyCameron as project } from '../content/projects.js';
import { codyTech as tech } from '../content/tech.js';
import Layout from '../components/layout';
import Project from '../components/Project/Project';

const CodyCameron = () => (
	<Layout pageTitle={'Cody Cameron'}>
		<Project project={project} tech={tech} />
	</Layout>
);

export default CodyCameron;
