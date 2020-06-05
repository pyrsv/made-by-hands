import React, { memo } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import PropTypes from 'prop-types';
import './styles.scss';

const RatingStars = ({ rating, edit = false, onStarClick }) => {
	return (
		<>
			<StarRatingComponent
				value={rating}
				editing={edit}
				onStarClick={onStarClick}
			/>
		</>
	);
};

RatingStars.propTypes = {
	rating: PropTypes.number,
	edit: PropTypes.bool,
	onStarClick: PropTypes.func,
};

RatingStars.defaultProps = {
	rating: 0,
	edit: false,
	onStarClick: () => {},
};

export default memo(RatingStars);
