import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper } from './styles';

const CloseButton = ({ onClick, size }) => {
	return (
		<Wrapper size={size}>
			<FontAwesomeIcon onClick={onClick} icon={['fas', 'times']} />
		</Wrapper>
	);
};

CloseButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	size: PropTypes.number,
};

CloseButton.defaultProps = {
	size: 22,
};

export default memo(CloseButton);
