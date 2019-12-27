import React from 'react';

import Layout from '../components/layout.js';
import Container from '../components/Container/Container';
import { SectionTitle, SectionSubtitle } from '../components/Text/Text';
import Button from '../components/Button/Button';

const NotFoundPage = () => (
	<Layout pageTitle={'Page Not Found'}>
		<Container>
			<SectionTitle>404 error</SectionTitle>
			<SectionSubtitle style={{ marginBottom: '60px' }}>
				This page doesn't exist.
			</SectionSubtitle>
			<Button to="/" outline direction={'up'} text="Go Back" />
		</Container>
	</Layout>
);

export default NotFoundPage;
