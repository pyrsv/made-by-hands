import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo/Logo';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import AuthModal from '../AuthModal/AuthModal';
import Navigation from './Navigation/Navigation';
import SearchField from './SearchField/SearchField';
import UserNavigation from './UserNavigation/UserNavigation';
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
	const [dropdown, setDropdown] = useState({
		catalog: false,
		profile: false,
	});

	const [isModal, setModal] = useState(false);
	const [isMobile, setMobile] = useState({ mobile: false });

	const handleWindowResize = () => {
		if (!isMobile.mobile && window.innerWidth <= 992) {
			// console.log('breakpoint', isMobile);
			setMobile(state => ({ ...state, mobile: !state.mobile }));
		}

		if (!isMobile.mobile && window.innerWidth > 992) {
			// console.log('breakpoint2', isMobile);

			setMobile(state => ({ ...state, mobile: !state.mobile }));
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.remove('resize', handleWindowResize);
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

	return (
		<StyledHeader>
			<LayoutContainer>
				<Container>
					<Logo />
					<Content>
						<Info>
							{!isMobile.mobile && (
								<Phone href="tel:+62896706255135">
									<PhoneIcon>
										<FontAwesomeIcon icon={['fas', 'phone-volume']} />
									</PhoneIcon>
									+38 (050) 960-28-85
								</Phone>
							)}

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
				</Container>
			</LayoutContainer>
			{isModal && <AuthModal onToggle={handleModalToggle} />}
		</StyledHeader>
	);
};

export default Header;
