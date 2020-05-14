import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import Title from '../UI/Title/title';
import ProfileNavigation from './ProfileNavigation/ProfileNavigation';
import Wishlist from './Wishlist/Wishlist';
import ContactInfo from './ContactInfo/ContactInfo';
import AdressBook from './AdressBook/AddressBook';

const Profile = () => {
	const { path } = useRouteMatch();

	return (
		<LayoutContainer>
			<Title color="dark" text="My profile" />
			<ProfileNavigation />
			<Switch>
				<Route path={`${path}/contact-info`}>
					<ContactInfo />
				</Route>
				<Route path={`${path}/adress-book`}>
					<AdressBook />
				</Route>
				<Route path={`${path}/wishlist`}>
					<Wishlist />
				</Route>
			</Switch>
		</LayoutContainer>
	);
};

export default Profile;
