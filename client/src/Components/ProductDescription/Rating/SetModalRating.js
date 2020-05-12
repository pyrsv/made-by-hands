import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import ModalRating from './ModalRating/ModalRating';
import PropTypes from 'prop-types';

const SetModalRating = ({ id, toggleModal }) => {
	const user = useSelector(state => state.auth.currentUser);
	const location = useLocation();

	return (
		<>
			{user ? (
				<ModalRating id={id} toggleModal={toggleModal} />
			) : (
				<NavLink
					to={{
						pathname: '/login',
						state: {
							background: location,
						},
					}}
				>
					<ModalRating id={id} toggleModal={toggleModal} />
				</NavLink>
			)}
		</>
	);
};

SetModalRating.propTypes = {
	id: PropTypes.string.isRequired,
	toggleModal: PropTypes.func.isRequired,
};

export default SetModalRating;
