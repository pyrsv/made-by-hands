import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from './Logo/Logo';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
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
		</StyledHeader>
	);
};

export default Header;
