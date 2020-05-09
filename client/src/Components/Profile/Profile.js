import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import ProfileNavigation from './ProfileNavigation/ProfileNavigation';

const Profile = () => {
	const { path } = useRouteMatch();

	return (
		<LayoutContainer>
			<ProfileNavigation />
			<Switch>
				<Route path={`${path}/contact-info`}>Contact Info</Route>
				<Route path={`${path}/adress-book`}>Adress book</Route>
				<Route path={`${path}/favorites`}>Favorites</Route>
			</Switch>
		</LayoutContainer>
	);
};

export default Profile;
