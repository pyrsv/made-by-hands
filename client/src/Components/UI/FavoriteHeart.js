import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
	onClick: PropTypes.func.isRequired,
};

const HeartWrapper = styled.div`
	width: 32px;
	height: 32px;
	font-size: 32px;
	color: #fd3018;
	transition: all 0.3s ease;
	&:hover {
		filter: drop-shadow(0px 0px 2px rgba(255, 0, 0, 0.5));
	}
`;

export default FavoriteHeart;
