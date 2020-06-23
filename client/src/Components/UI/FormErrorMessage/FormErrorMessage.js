import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from './styles';

const FormErrorMessage = ({ error }) => {
	return <ErrorMessage>{error}</ErrorMessage>;
};

FormErrorMessage.propTypes = {
	error: PropTypes.string.isRequired,
};

export default FormErrorMessage;
