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
import Drawer from '../UI/Drawer/Drawer';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import { userLogout } from '../../store/actions/authActions';
import { getCategories } from '../../store/actions/filtersActions';
import { toggleModal, toggleNav } from '../../store/actions/UIActions';
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
	const [dropdown, setDropdown] = useState({
		catalog: false,
		profile: false,
	});

	const [isMobile, setMobile] = useState({ mobile: false });
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
		// eslint-disable-next-line no-unused-expressions
		isNav && dispatch(toggleNav());
		if (!isMobile.mobile && window.innerWidth <= 900) {
			setMobile(state => ({ ...state, mobile: true }));
		}

		if (!isMobile.mobile && window.innerWidth > 900) {
			setMobile(state => ({ ...state, mobile: false }));
		}
	};

	useEffect(() => {
		handleWindowResize();
		dispatch(getCategories());
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
										onModalOpen={toggleModal}
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
							<HamburgerWrapper isOpen={isNav}>
								<HamburgerMenu
									isOpen={isNav}
									menuClicked={() => dispatch(toggleNav())}
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
			{isNav && isMobile.mobile && (
				<Drawer heading="Menu" onToggle={() => dispatch(toggleNav())}>
					<Navigation
						isDropdown={dropdown.catalog}
						routes={catalogRoutes}
						onDropdownOpen={() => handleDropdownToggle('catalog')}
					/>
					<UserNavigation
						isDropdown={dropdown.profile}
						routes={profileRoutes}
						onDropdownOpen={() => handleDropdownToggle('profile')}
						onModalOpen={() => dispatch(toggleModal())}
					/>
				</Drawer>
			)}
			{isModal && <AuthModal onToggle={() => dispatch(toggleModal())} />}
		</StyledHeader>
	);
};

export default Header;
