import React, { Fragment } from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../hooks/useDarkMode.js';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';
import GlobalStyle from '../styles/GlobalStyle';
import Theme from '../styles/Theme';

const Layout = ({ children }) => {
	const [
		theme,
		toggleTheme,
		componentMounted,
	] = useDarkMode();

	if (!componentMounted) {
		return <div />;
	}

	return (
		<Theme colorTheme={theme}>
			<Fragment>
				<GlobalStyle />
				<Nav colorTheme={theme} toggleTheme={toggleTheme} />

				<main>{children}</main>
				<Footer />
			</Fragment>
		</Theme>
	);
};

export default Layout;
