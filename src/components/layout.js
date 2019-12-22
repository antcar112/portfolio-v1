import React, { Fragment } from 'react';
import styled from 'styled-components';

import { useDarkMode } from '../hooks/useDarkMode.js';
import Nav from './Nav/Nav.js';
import GlobalStyle from '../styles/GlobalStyle';
import Theme from '../styles/Theme';

const Test = styled.span`font-family: ${props => props.theme.font.cursive};`;

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

				<main>
					{children}
					<Test>HELLO THIS IS A TEST!</Test>
				</main>
				<footer>© Anthony Caron {new Date().getFullYear()}</footer>
			</Fragment>
		</Theme>
	);
};

export default Layout;
