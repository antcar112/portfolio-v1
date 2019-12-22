import React from 'react';

import Layout from '../components/layout';
import Hero from '../components/Hero/Hero';
import Work from '../components/Work/Work';

class Home extends React.Component {
	render() {
		return (
			<Layout>
				<Hero />
				<Work />
			</Layout>
		);
	}
}

export default Home;
