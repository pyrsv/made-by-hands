import React, { useState } from 'react';
import {
	ModalWrapper,
	Header,
	Title,
	Content,
} from '../../../AuthModal/styles';
import { RatingContainer } from './styles';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import FormToAddComment from './FormRating/FormToAddComment';
import CloseButtom from '../../../UI/CloseButton/CloseButton';
import PropTypes from 'prop-types';
import RatingStars from '../../../UI/RatingStars/RatingStars';

const ModalRating = ({ toggleModal, id }) => {
	const [ratingStar, setRating] = useState(null);

	const setRatingStar = rating => {
		setRating(rating);
	};

	return (
		<>
			<ModalWrapper>
				<Header>
					<Title>Feedback</Title>
					<CloseButtom onClick={toggleModal} />
				</Header>
				<Content>
					<RatingContainer>
						<RatingStars rating={ratingStar} onStarClick={setRatingStar} edit />
					</RatingContainer>
					<FormToAddComment
						toggleModal={toggleModal}
						rating={ratingStar}
						id={id}
					/>
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
