import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import { Menu, MenuItem } from './styles';

const Navigation = ({
	isDropdown,
	onDropdownOpen,
	routes,
	onDropdownLinkClick,
	onLinkClick,
}) => {
	return (
		<nav>
			<Menu>
				<MenuItem>
					<Dropdown
						isOpen={isDropdown}
						on
						onOpen={onDropdownOpen}
						heading="Catalog"
						routes={routes}
						onLinkClick={onDropdownLinkClick}
					/>
				</MenuItem>
				<MenuItem onClick={onLinkClick}>
					<NavLink to="/sales">Sales</NavLink>
				</MenuItem>
				<MenuItem onClick={onLinkClick}>
					<NavLink to="/">Gallery</NavLink>
				</MenuItem>
				<MenuItem onClick={onLinkClick}>
					<NavLink to="/">FAQ</NavLink>
				</MenuItem>
				<MenuItem onClick={onLinkClick}>
					<NavLink to="/">Reviews</NavLink>
				</MenuItem>
				<MenuItem onClick={onLinkClick}>
					<NavLink to="/">About us</NavLink>
				</MenuItem>
				<MenuItem onClick={onLinkClick}>
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
	onDropdownLinkClick: PropTypes.func.isRequired,
	onLinkClick: PropTypes.func.isRequired,
};

export default Navigation;
