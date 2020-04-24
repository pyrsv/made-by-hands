import React from 'react';
import PropTypes from 'prop-types';
import UserNavigation from '../Header/UserNavigation/UserNavigation';
import Navigation from '../Header/Navigation/Navigation';
import { DrawerWrapper, DrawerContent, DrawerHeading } from './styles';

const Drawer = ({
	catalogRoutes,
	profileRoutes,
	isCatalogDropdown,
	isProfileDropdown,
	onCatalogDropdownOpen,
	onProfileDropdownOpen,
	onModalOpen,
}) => {
	return (
		<DrawerWrapper>
			<DrawerHeading>Menu</DrawerHeading>
			<DrawerContent>
				<Navigation
					isDropdown={isCatalogDropdown}
					routes={catalogRoutes}
					onDropdownOpen={onCatalogDropdownOpen}
				/>
				<UserNavigation
					isDropdown={isProfileDropdown}
					routes={profileRoutes}
					onDropdownOpen={onProfileDropdownOpen}
					onModalOpen={onModalOpen}
				/>
			</DrawerContent>
		</DrawerWrapper>
	);
};

Drawer.propTypes = {
	catalogRoutes: PropTypes.arrayOf(PropTypes.object).isRequired,
	profileRoutes: PropTypes.arrayOf(PropTypes.object).isRequired,
	isCatalogDropdown: PropTypes.bool.isRequired,
	isProfileDropdown: PropTypes.bool.isRequired,
	onCatalogDropdownOpen: PropTypes.func.isRequired,
	onProfileDropdownOpen: PropTypes.func.isRequired,
	onModalOpen: PropTypes.func.isRequired,
};

export default Drawer;
