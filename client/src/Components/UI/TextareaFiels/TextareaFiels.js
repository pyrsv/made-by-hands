import React from 'react';
import PropTypes from 'prop-types';
import { TextareaContainer, Textarea, Label } from './styles';

const TextareaField = ({
	label,
	placeholder,
	onChange,
	required,
	name,
	type,
	value,
	target,
}) => {
	return (
		<TextareaContainer target={target}>
			{label && (
				<Label htmlFor={name}>
					{label} {required && '*'}
				</Label>
			)}
			<Textarea
				id={name}
				type={type}
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
		</TextareaContainer>
	);
};

TextareaField.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	required: PropTypes.bool,
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	target: PropTypes.oneOf(['form', 'search']).isRequired,
};

TextareaField.defaultProps = {
	label: '',
	placeholder: '',
	required: false,
};

export default TextareaField;
