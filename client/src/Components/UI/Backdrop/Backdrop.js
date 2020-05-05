import React from 'react';
import PropTypes from 'prop-types';
import { StyledBackdrop } from './styles';

const Backdrop = ({ onClick }) => {
	return <StyledBackdrop onClick={onClick} />;
};

Backdrop.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default Backdrop;
