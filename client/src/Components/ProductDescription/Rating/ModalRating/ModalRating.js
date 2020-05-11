import React from 'react';
import {
	ModalWrapper,
	Header,
	Title,
	Content,
} from '../../../AuthModal/styles';
import { RatingContainer } from './styles';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import Rater from 'react-rater';
import FormToAddComment from './FormRating/FormToAddComment';
import CloseButtom from '../../../UI/CloseButton/CloseButton';
import PropTypes from 'prop-types';

const ModalRating = ({ toggleModal, id }) => {
	return (
		<>
			<ModalWrapper>
				<Header>
					<Title>Feedback</Title>
					<CloseButtom onClick={toggleModal} />
				</Header>
				<Content>
					<RatingContainer>
						<Rater total={5} />
					</RatingContainer>
					<FormToAddComment id={id} />
				</Content>
			</ModalWrapper>
			<Backdrop onClick={toggleModal} />
		</>
	);
};

ModalRating.propTypes = {
	id: PropTypes.string.isRequired,
	toggleModal: PropTypes.func.isRequired,
};

export default ModalRating;
