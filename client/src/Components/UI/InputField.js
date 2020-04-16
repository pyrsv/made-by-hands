import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputField = ({
	label,
	placeholder,
	onChange,
	required,
	name,
	type,
	value,
}) => {
	return (
		<InputContainer>
			{label && (
				<Label htmlFor={name}>
					{label} {required && '*'}
				</Label>
			)}
			<Input
				id={name}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
		</InputContainer>
	);
};

const InputContainer = styled.div`
	font-family: 'Raleway', sans-serif;
	margin-bottom: 22px;
`;

const Input = styled.input`
	display: inline-block;
	border: 1px solid #16161c;
	box-sizing: border-box;
	border-radius: 4px;
	padding: 6px 12px;
	font-family: Raleway;
	font-size: 16px;
	outline: none;
`;

const Label = styled.label`
	display: block;
	margin-bottom: 5px;
`;

InputField.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

InputField.defaultProps = {
	label: '',
	placeholder: '',
};

export default InputField;
