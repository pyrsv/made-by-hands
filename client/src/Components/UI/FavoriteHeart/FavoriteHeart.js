import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeartWrapper } from './styles';

const FavoriteHeart = ({ isFavorite, onClick }) => {
	const iconType = isFavorite ? 'fas' : 'far';
	return (
		<HeartWrapper onClick={onClick}>
			<FontAwesomeIcon icon={[iconType, 'heart']} />
		</HeartWrapper>
	);
};

FavoriteHeart.propTypes = {
	isFavorite: PropTypes.bool.isRequired,
	onClick: PropTypes.func,
};

FavoriteHeart.defaultProps = {
	onClick: () => {},
};

export default memo(FavoriteHeart);
