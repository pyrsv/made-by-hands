import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './styles';

const Title = ({ color, text }) => {
	return (
		<div>
			<StyledTitle color={color}>{text}</StyledTitle>
		</div>
	);
};

Title.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
};

Title.defaultProps = {
	color: 'white',
};

export default memo(Title);
