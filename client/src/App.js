import React from 'react';
import Header from './Components/Header/Header';
import AppContainer from './Components/AppContainer/AppContainer';
import Routes from './Routes/Routes';
import Footer from './Components/Footer/Footer';

const App = () => {
	return (
		<AppContainer>
			<Header />
			<Routes />
			<Footer />
		</AppContainer>
	);
};

export default App;
