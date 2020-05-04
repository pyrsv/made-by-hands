import React from 'react';
import PropTypes from 'prop-types';
import { StyledBackdrop } from './styles';

const Backdrop = ({ onClick }) => {
	return <StyledBackdrop onCLick={onClick} />;
};

Backdrop.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default Backdrop;
