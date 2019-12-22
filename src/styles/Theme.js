import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	sharedColor     : {
		primary : '#0F97DB',
	},
	font            : {
		cursive : '"Covered By Your Grace", cursive;',
		heading : '"Rubik", "Bitter", "serif"',
		body    : '"Karla", "Helvetica", "sans-serif"',
	},
	hoverTransition :
		'color 150ms ease-out, background 150ms ease-out, background-color 150ms ease-out',
};

const lightTheme = {
	color : {
		text          : '#000000',
		textSecondary : '#777777',
		bg            : '#ffffff',
		bgCard        : '#ffffff',
	},
};

const darkTheme = {
	color : {
		text          : '#ffffff',
		textSecondary : '#cccccc',
		bg            : '#000000',
		bgCard        : '#000000',
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
