import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from '../Dropdown/Dropdown';
import { Container, UserNavItem, UserNavIcon } from './styles';

const UserNavigation = ({ isDropdown, onDropdownOpen, routes }) => {
	return (
		<Container>
			<UserNavItem>
				<UserNavIcon>
					<FontAwesomeIcon icon={['far', 'user']} />
				</UserNavIcon>
				<Dropdown
					isOpen={isDropdown}
					heading="Profile"
					onOpen={onDropdownOpen}
					routes={routes}
				/>
			</UserNavItem>
			<UserNavItem>
				<NavLink to="/">
					<UserNavIcon accent>
						<FontAwesomeIcon icon={['fas', 'heart']} />
					</UserNavIcon>
					Wishlist
				</NavLink>
			</UserNavItem>
			<UserNavItem>
				<NavLink to="/">
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
