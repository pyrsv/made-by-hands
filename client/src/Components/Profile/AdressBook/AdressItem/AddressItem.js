import React from 'react';
import CloseButtton from '../../../UI/CloseButton/CloseButton';
import { Address, AddressText, EditLink, DeleteBtnContainer } from './styles';

// eslint-disable-next-line react/prop-types
const AddressItem = ({ city, street, houseNumber, index }) => {
	return (
		<Address>
			<DeleteBtnContainer>
				<CloseButtton onClick={() => {}} size={16} />
			</DeleteBtnContainer>
			<AddressText>{`${city}, ${street} ${houseNumber}, ${index}`}</AddressText>
			<EditLink to="/">Изменить</EditLink>
		</Address>
	);
};

export default AddressItem;
