import React from 'react';
import PropTypes from 'prop-types';
import { Message } from './styles';

const FormErrorMessage = ({ text }) => {
	return <Message>{text}</Message>;
};

FormErrorMessage.propTypes = {
	text: PropTypes.string.isRequired,
};

export default FormErrorMessage;
