import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from '../Dropdown/Dropdown';
import { Container, UserNavItem, UserNavIcon } from './styles';
import { useSelector } from 'react-redux';

const UserNavigation = ({ isDropdown, onDropdownOpen, routes }) => {
	const user = useSelector(state => state.auth.currentUser);
	const location = useLocation();
	return (
		<Container>
			<UserNavItem>
				<UserNavIcon>
					<FontAwesomeIcon icon={['far', 'user']} />
				</UserNavIcon>
				{user ? (
					<Dropdown
						isOpen={isDropdown}
						heading="Profile"
						onOpen={onDropdownOpen}
						routes={routes}
					/>
				) : (
					<NavLink
						to={{
							pathname: '/login',
							state: {
								background: location,
							},
						}}
					>
						Login
					</NavLink>
				)}
			</UserNavItem>
			<UserNavItem>
				<NavLink to="/profile/wishlist">
					<UserNavIcon accent>
						<FontAwesomeIcon icon={['fas', 'heart']} />
					</UserNavIcon>
					Wishlist
				</NavLink>
			</UserNavItem>
			<UserNavItem>
				<NavLink to="/cart">
					<UserNavIcon>
						<FontAwesomeIcon icon={['fas', 'shopping-cart']} />
					</UserNavIcon>
					Cart
				</NavLink>
			</UserNavItem>
		</Container>
	);
};

UserNavigation.propTypes = {
	isDropdown: PropTypes.bool.isRequired,
	onDropdownOpen: PropTypes.func.isRequired,
	routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserNavigation;
