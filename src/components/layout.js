import React, { Fragment, useContext } from 'react';

import { GlobalThemeContext } from '../context/GlobalContextProvider';
import LoadingPage from './LoadingPage/LoadingPage';
import Helmet from './Helmet/Helmet.js';
import Nav from './Nav/Nav.js';
import Footer from './Footer/Footer.js';
import GlobalStyle from '../styles/GlobalStyle';
import Theme from '../styles/Theme';

const Layout = ({ pageTitle, children }) => {
	const theme = useContext(GlobalThemeContext);

	return (
		<Theme colorTheme={theme.theme}>
			<Helmet pageTitle={pageTitle} />
			{!theme.mounted ? (
				<LoadingPage />
			) : (
				<Fragment>
					<GlobalStyle />
					<Nav />
					<main>{children}</main>
					<Footer />
				</Fragment>
			)}
		</Theme>
	);
};

export default Layout;
