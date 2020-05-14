import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Nav, NavItem, StyledNavLink } from './styles';

const ProfileNavigation = () => {
	const { url } = useRouteMatch();
	return (
		<Nav>
			<NavItem>
				<StyledNavLink to={`${url}/contact-info`}>Contact Info</StyledNavLink>
			</NavItem>
			<NavItem>
				<StyledNavLink to={`${url}/wishlist`}>Wishlist</StyledNavLink>
			</NavItem>
			<NavItem>
				<StyledNavLink to={`${url}/orders`}>Orders</StyledNavLink>
			</NavItem>
		</Nav>
	);
};

export default ProfileNavigation;
