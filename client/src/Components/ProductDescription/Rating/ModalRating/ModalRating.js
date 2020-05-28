import React, { useState } from 'react';
import {
	ModalWrapper,
	Header,
	Title,
	Content,
} from '../../../AuthModal/styles';
import { RatingContainer } from './styles';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import Backdrop from '../../../UI/Backdrop/Backdrop';
import FormToAddComment from './FormRating/FormToAddComment';
import CloseButtom from '../../../UI/CloseButton/CloseButton';
import PropTypes from 'prop-types';
import RatingStars from '../../../UI/RatingStars/RatingStars';

const ModalRating = ({ toggleModal, id }) => {
	const [ratingStar, setRating] = useState(null);
	const user = useSelector(state => state.auth.currentUser);
	const location = useLocation();

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
					{user ? (
						<>
							{' '}
							<>
								<RatingContainer>
									<RatingStars
										rating={ratingStar || 5}
										onStarClick={setRatingStar}
										edit
									/>
								</RatingContainer>
								<FormToAddComment
									toggleModal={toggleModal}
									rating={ratingStar}
									id={id}
								/>
							</>
						</>
					) : (
						<NavLink
							to={{
								pathname: '/login',
								state: {
									background: location,
								},
							}}
						>
							<>
								<RatingContainer>
									<RatingStars
										rating={ratingStar || 5}
										onStarClick={setRatingStar}
										edit
									/>
								</RatingContainer>
								<FormToAddComment
									toggleModal={toggleModal}
									rating={ratingStar}
									id={id}
								/>
							</>
						</NavLink>
					)}
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
