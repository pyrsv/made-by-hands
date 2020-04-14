import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputField = ({ label, placeholder, onChange, required, name, type }) => {
	return (
		<InputContainer>
			{label && <Label htmlFor={name}>{label} {required && '*'}</Label>}
			<Input id={name} type={type} placeholder={placeholder} onChange={onChange} />
		</InputContainer>
	);
};

const InputContainer = styled.div``;

const Input = styled.input``;

const Label = styled.label``;

InputField.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

InputField.defaultProps = {
	label: '',
	placeholder: '',
};
