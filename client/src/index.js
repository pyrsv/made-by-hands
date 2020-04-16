import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(faEnvelope, fas, far);

const theme = {
	lightPink: '#F9ECEF', // main light background color
	mainDark: '#16161C', // color for text, buttons and dark borders
	mainOlive: '#BBC8A9', // main olive background
	whiteBackground: '#FFFCFC', // background for modals and dropdowns
	lightBorder: '#747A82', // ligtht border color, used in modal forms
	darkButtonColor: '#DEE0DF', // font color for dark controls
	accentRed: '#DE3019', // bright red color for discounted price and FavoriteHeart
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
