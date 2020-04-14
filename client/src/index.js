import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

const theme = {
	lightPink: '#F9ECEF', // main light background color
	mainDark: '#16161C', // color for text, buttons and dark borders
	mainOlive: '#BBC8A9', // main olive background
	whiteBackground: '#FFFCFC', // background for modals and dropdowns
	lightBorder: '#747A82', // ligth border color, used in modal forms
};

ReactDOM.render(
	<BrowserRouter>
		<React.StrictMode>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</React.StrictMode>
	</BrowserRouter>,
	document.getElementById('root')
);
