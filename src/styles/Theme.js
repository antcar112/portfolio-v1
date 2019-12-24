import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	font            : {
		cursive : '"Rubik", cursive;',
		heading : '"Rubik", "Bitter", "serif"',
		body    : '"Karla", "Helvetica", "sans-serif"',
	},
	hoverTransition :
		'color 200ms ease-out, border 200ms ease-out, background 200ms ease-out, background-color 200ms ease-out',
};

const lightTheme = {
	color : {
		text            : '#000000',
		textSecondary   : '#777777',
		bg              : '#ffffff',
		bgCard          : '#ffffff',
		primary         : '#0F97DB',
		primaryDarkened : '#0d8bca',
	},
};

const darkTheme = {
	color : {
		text            : '#ffffff',
		textSecondary   : '#cccccc',
		bg              : '#121212',
		bgCard          : '#1F1F1F',
		primary         : '#0F97DB',
		primaryDarkened : '#0d8bca',
	},
};

const Theme = ({ colorTheme, children }) => (
	<ThemeProvider theme={theme}>
		<ThemeProvider theme={colorTheme === 'light' ? lightTheme : darkTheme}>
			{children}
		</ThemeProvider>
	</ThemeProvider>
);

export default Theme;
