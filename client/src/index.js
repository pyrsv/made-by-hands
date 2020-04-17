import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import thunk from 'redux-thunk';

import { library } from '@fortawesome/fontawesome-svg-core';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { faEnvelope, far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App';

library.add(faEnvelope, fas, far);

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

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
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
