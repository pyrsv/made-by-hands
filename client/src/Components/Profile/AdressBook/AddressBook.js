import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AdressItem from './AdressItem/AddressItem';
import {
	AdressList,
	Wrapper,
	NewAdressContainer,
	NewAdressLink,
	Placeholder,
} from './styles';

const AdressBook = () => {
	const location = useLocation();
	const { adressList } = useSelector(state => state.auth.currentUser);
	return (
		<Wrapper>
			{adressList && adressList.length ? (
				<AdressList>
					<AdressItem
						city="Kyiv"
						street="Malyshko"
						houseNumber="19a"
						index="02128"
					/>
				</AdressList>
			) : (
				<Placeholder>You have not saved adress yet</Placeholder>
			)}
			;
			<NewAdressContainer>
				<NewAdressLink to={location}>Add new adress</NewAdressLink>
			</NewAdressContainer>
		</Wrapper>
	);
};

export default AdressBook;
