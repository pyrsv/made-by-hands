import React, { useState, useEffect, useCallback } from 'react';
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
import Drawer from '../UI/Drawer/Drawer';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import { userLogout, getUser } from '../../store/actions/authActions';
import { getCategories } from '../../store/actions/filtersActions';
import {
	toggleModal,
	openNav,
	closeNav,
	setHeaderMobile,
	setMobile,
	setTablet,
} from '../../store/actions/UIActions';
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
	const isModal = useSelector(state => state.UI.isModal);
	const isNav = useSelector(state => state.UI.isNav);
	const isMobile = useSelector(state => state.UI.isHeaderMobile);
	const [dropdown, setDropdown] = useState({
		catalog: false,
		profile: false,
	});

	const handleWindowResize = useCallback(() => {
		dispatch(closeNav());
		if (window.innerWidth <= 992) {
			dispatch(setHeaderMobile(true));
		} else {
			dispatch(setHeaderMobile(false));
		}

		if (window.innerWidth <= 768) {
			dispatch(setTablet(true));
		} else {
			dispatch(setTablet(false));
		}

		if (window.innerWidth <= 576) {
			dispatch(setMobile(true));
		} else {
			dispatch(setMobile(false));
		}
	}, [dispatch]);

	useEffect(() => {
		handleWindowResize();
		dispatch(getUser());

		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, [dispatch, handleWindowResize]);

	const [isSearch, setSearch] = useState(false);

	const catalogRoutes = [
		<NavLink to="/catalog">All Items</NavLink>,
		...useSelector(state =>
			state.filters.categories.map(category => (
				<NavLink key={category.id} to={`/catalog?categories=${category.id}`}>
					{category.name}
				</NavLink>
			))
		),
	];

	const profileRoutes = [
		<NavLink to="/profile/contact-info">contact info</NavLink>,
		<NavLink to="/profile/wishlist">wishlist</NavLink>,
		<span
			role="button"
			tabIndex="0"
			onKeyDown={() => dispatch(userLogout())}
			onClick={() => dispatch(userLogout())}
		>
			Logout
		</span>,
	];

	useEffect(() => {
		dispatch(getCategories());
	}, [dispatch]);

	const handleDropdownToggle = key => {
		setDropdown({
			...dropdown,
			[key]: !dropdown[key],
		});
	};

	const handleDropdownLinkClick = target => {
		dispatch(closeNav());
		handleDropdownToggle(target);
	};

	return (
		<StyledHeader>
			<LayoutContainer>
				<Container>
					{!isMobile ? (
						<>
							<NavLink to="/">
								<Logo />
							</NavLink>
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
										onDropdownLinkClick={() => handleDropdownToggle('profile')}
										onDropdownOpen={() => handleDropdownToggle('profile')}
										onLinkClick={() => {}}
									/>
								</Info>
								<Navigation
									isDropdown={dropdown.catalog}
									routes={catalogRoutes}
									onDropdownOpen={() => handleDropdownToggle('catalog')}
									onDropdownLinkClick={() => handleDropdownToggle('catalog')}
									onLinkClick={() => {}}
								/>
							</Content>
						</>
					) : (
						<>
							<HamburgerWrapper isOpen={isNav}>
								<HamburgerMenu
									isOpen={isNav}
									menuClicked={() => dispatch(openNav())}
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
							{isSearch && (
								<SearchField onToggle={() => setSearch(!isSearch)} />
							)}
						</>
					)}
				</Container>
			</LayoutContainer>
			{isNav && isMobile && (
				<Drawer heading="Menu" onToggle={() => dispatch(closeNav())}>
					<Navigation
						isDropdown={dropdown.catalog}
						routes={catalogRoutes}
						onDropdownOpen={() => handleDropdownToggle('catalog')}
						onDropdownLinkClick={() => handleDropdownLinkClick('catalog')}
						onLinkClick={() => dispatch(closeNav())}
					/>
					<UserNavigation
						isDropdown={dropdown.profile}
						routes={profileRoutes}
						onDropdownOpen={() => handleDropdownToggle('profile')}
						onDropdownLinkClick={() => handleDropdownLinkClick('profile')}
						onLinkClick={() => dispatch(closeNav())}
					/>
					<Phone href="tel:+62896706255135">
						<PhoneIcon>
							<FontAwesomeIcon icon={['fas', 'phone-volume']} />
						</PhoneIcon>
						+38 (050) 960-28-85
					</Phone>
				</Drawer>
			)}
			{isModal && <AuthModal onToggle={() => dispatch(toggleModal())} />}
		</StyledHeader>
	);
};

export default Header;
