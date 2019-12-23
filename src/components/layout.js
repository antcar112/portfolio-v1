import React, { Fragment } from 'react';

import { useDarkMode } from '../hooks/useDarkMode.js';
import LoadingPage from './LoadingPage/LoadingPage';
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

	return (
		<Theme colorTheme={theme}>
			{!componentMounted ? (
				<LoadingPage />
			) : (
				<Fragment>
					<GlobalStyle />
					<Nav colorTheme={theme} toggleTheme={toggleTheme} />
					<main>{children}</main>
					<Footer />
				</Fragment>
			)}
		</Theme>
	);
};

export default Layout;
