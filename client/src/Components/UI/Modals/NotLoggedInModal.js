import React from 'react';
import { ModalWrapper } from '../../AuthModal/styles';
import { CloseModalButton } from './styles';
import PropTypes from 'prop-types';

const NotLoggedInModal = ({ toggleModal }) => {
	return (
		<ModalWrapper>
			<span>You must be logged in to add to favourites</span>
			<CloseModalButton type="button" onClick={toggleModal}>
				X
			</CloseModalButton>
		</ModalWrapper>
	);
};

NotLoggedInModal.propTypes = {
	toggleModal: PropTypes.func.isRequired,
};
export default NotLoggedInModal;
