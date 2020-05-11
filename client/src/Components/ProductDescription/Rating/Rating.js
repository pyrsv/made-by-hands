import React, { useState } from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import ModalRating from './ModalRating/ModalRating';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const Rating = ({ id }) => {
	const [isModalOpen, setToggleModal] = useState(false);

	const toggleModal = () => {
		setToggleModal(prevState => !prevState);
	};

	return (
		<>
			<Rater total={5} rating={2} />
			<Button onClick={toggleModal} text="write feedback" />
			{isModalOpen && <ModalRating id={id} toggleModal={toggleModal} />}
		</>
	);
};

Rating.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Rating;
