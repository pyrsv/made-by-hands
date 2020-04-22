import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Wrapper } from './styles';

const CloseButton = ({ onClick }) => {
	return (
		<Wrapper>
			<FontAwesomeIcon onClick={onClick} icon={['fas', 'times']} />
		</Wrapper>
	);
};

CloseButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default CloseButton;
