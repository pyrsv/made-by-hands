import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo/Logo';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import AuthModal from '../AuthModal/AuthModal';
import Navigation from './Navigation/Navigation';
import SearchField from './SearchField/SearchField';
import UserNavigation from './UserNavigation/UserNavigation';
// import { fetchUserRegister } from '../../store/actions/authActions';
import {
	StyledHeader,
	Container,
	Info,
	Content,
	Phone,
	PhoneIcon,
} from './styles';

const catalogRoutes = [
	{ route: '/', name: 'all items' },
	{ route: '/', name: 'Bags' },
	{ route: '/', name: 'Suitcases' },
	{ route: '/', name: 'Backbacks' },
	{ route: '/', name: 'Wallets' },
	{ route: '/', name: 'Other accessories' },
];

const profileRoutes = [
	{ route: '/', name: 'contact info' },
	{ route: '/', name: 'adress book' },
	{ route: '/', name: 'favorites' },
	{ route: '/', name: 'logout' },
];

const Header = () => {
	const dispatch = useDispatch();

	const [dropdown, setDropdown] = useState({
		catalog: false,
		profile: false,
	});

	const [isModal, setModal] = useState(false);
	const [isLoggedIn] = useState(false);

	const handleDropdownToggle = key => {
		setDropdown({
			...dropdown,
			[key]: !dropdown[key],
		});
	};

	const handleModalToggle = () => {
		setModal(!isModal);
	};

	const handleRegister = data => {
		// dispatch(fetchUserRegister(data));
		handleModalToggle();
	};

	// const handleLogin = async data => {};

	return (
		<StyledHeader>
			<LayoutContainer>
				<Container>
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
								isLoggedIn={isLoggedIn}
							/>
						</Info>
						<Navigation
							isDropdown={dropdown.catalog}
							routes={catalogRoutes}
							onDropdownOpen={() => handleDropdownToggle('catalog')}
						/>
					</Content>
				</Container>
			</LayoutContainer>
			{isModal && (
				<AuthModal
					onRegister={handleRegister}
					// onLogin={handleLogin}
					onToggle={handleModalToggle}
				/>
			)}
		</StyledHeader>
	);
};

export default Header;
