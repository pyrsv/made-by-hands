import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { Menu, MenuItem } from './styles';

const Navigation = ({ isDropdown, onDropdownOpen, routes }) => {
	return (
		<nav>
			<Menu>
				<MenuItem>
					<Dropdown
						isOpen={isDropdown}
						onOpen={onDropdownOpen}
						heading="Catalog"
						routes={routes}
					/>
				</MenuItem>
				<MenuItem>
					<NavLink to="/">Sales</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink to="/">Gallery</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink to="/">FAQ</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink to="/">Reviews</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink to="/">About us</NavLink>
				</MenuItem>
				<MenuItem>
					<NavLink to="/">Blog</NavLink>
				</MenuItem>
			</Menu>
		</nav>
	);
};

Navigation.propTypes = {
	isDropdown: PropTypes.bool.isRequired,
	onDropdownOpen: PropTypes.func.isRequired,
	routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Navigation;
