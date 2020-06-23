import React, { memo } from 'react';
import ReactStars from 'react-stars';
import PropTypes from 'prop-types';
import './styles.scss';

const RatingStars = ({ rating, edit = false, onStarClick }) => {
	return (
		<ReactStars
			className="ratingStar"
			count={5}
			onChange={onStarClick}
			value={rating}
			edit={edit}
			color2="#ffd700"
		/>
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
