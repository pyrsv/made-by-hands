import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';
import Logo from './Logo/Logo';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import AuthModal from '../AuthModal/AuthModal';
import Navigation from './Navigation/Navigation';
import SearchField from './SearchField/SearchField';
import UserNavigation from './UserNavigation/UserNavigation';
import Drawer from '../Drawer/Drawer';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import { userLogout } from '../../store/actions/authActions';
import { getCategoriesAction } from '../../store/actions/catalogActions';
import {
	StyledHeader,
	Container,
	Info,
	Content,
	Phone,
	PhoneIcon,
	HamburgerWrapper,
} from './styles';

const Header = () => {
	const dispatch = useDispatch();

	const [dropdown, setDropdown] = useState({
		catalog: false,
		profile: false,
	});

	const [isModal, setModal] = useState(false);
	const [isDrawer, setDrawer] = useState(false);
	const [isMobile, setMobile] = useState({ mobile: false });
	const [isSearch, setSearch] = useState(false);

	const catalogRoutes = [
		<NavLink to="/catalog">All Items</NavLink>,
		...useSelector(state =>
			state.catalog.categories.map(category => (
				<NavLink key={category.id} to={`/catalog?categories=${category.id}`}>
					{category.name}
				</NavLink>
			))
		),
	];

	const profileRoutes = [
		<NavLink to="/">contact info</NavLink>,
		<NavLink to="/">adress book</NavLink>,
		<NavLink to="/">favorites</NavLink>,
		<span
			role="button"
			tabIndex="0"
			onKeyDown={() => dispatch(userLogout())}
			onClick={() => dispatch(userLogout())}
		>
			Logout
		</span>,
	];

	const handleWindowResize = () => {
		setDrawer(false);
		if (!isMobile.mobile && window.innerWidth <= 900) {
			setMobile(state => ({ ...state, mobile: true }));
		}

		if (!isMobile.mobile && window.innerWidth > 900) {
			setMobile(state => ({ ...state, mobile: false }));
		}
	};

	useEffect(() => {
		handleWindowResize();
		dispatch(getCategoriesAction());
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	const handleDropdownToggle = key => {
		setDropdown({
			...dropdown,
			[key]: !dropdown[key],
		});
	};

	const handleModalToggle = () => {
		setModal(!isModal);
	};

	const handleDrawerToggle = () => {
		setDrawer(!isDrawer);
	};

	return (
		<StyledHeader>
			<LayoutContainer>
				<Container>
					{!isMobile.mobile ? (
						<>
							<Logo />
							<Content>
								<Info>
									<Phone href="tel:+62896706255135">
										<PhoneIcon>
											<FontAwesomeIcon icon={['fas', 'phone-volume']} />
										</PhoneIcon>
										+38 (050) 960-28-85
									</Phone>

									<SearchField />
									<UserNavigation
										isDropdown={dropdown.profile}
										routes={profileRoutes}
										onDropdownOpen={() => handleDropdownToggle('profile')}
										onModalOpen={handleModalToggle}
									/>
								</Info>
								<Navigation
									isDropdown={dropdown.catalog}
									routes={catalogRoutes}
									onDropdownOpen={() => handleDropdownToggle('catalog')}
								/>
							</Content>
						</>
					) : (
						<>
							<HamburgerWrapper isOpen={isDrawer}>
								<HamburgerMenu
									isOpen={isDrawer}
									menuClicked={handleDrawerToggle}
									width={28}
									height={20}
									strokeWidth={2}
									rotate={0}
									color="black"
									borderRadius={0}
									animationDuration={0.3}
								/>
							</HamburgerWrapper>
							<Logo />
							<HeaderButtons onSearchClick={() => setSearch(!isSearch)} />
							{isSearch && <SearchField />}
						</>
					)}
				</Container>
			</LayoutContainer>
			{isDrawer && isMobile.mobile && (
				<Drawer
					catalogRoutes={catalogRoutes}
					profileRoutes={profileRoutes}
					isProfileDropdown={dropdown.profile}
					isCatalogDropdown={dropdown.catalog}
					onCatalogDropdownOpen={() => handleDropdownToggle('catalog')}
					onProfileDropdownOpen={() => handleDropdownToggle('profile')}
					onModalOpen={handleModalToggle}
				/>
			)}
			{isModal && <AuthModal onToggle={handleModalToggle} />}
		</StyledHeader>
	);
};

export default Header;
