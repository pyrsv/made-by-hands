import React from 'react';
import PropTypes from 'prop-types';
import { RadioCheck, RadioWrapper, DefaultRadio } from './styles';

const RadioButton = ({ id, onChange, label, value, isSelected }) => {
	return (
		<RadioWrapper className="RadioButton">
			<label htmlFor={id}>
				<DefaultRadio
					id={id}
					onChange={onChange}
					value={value}
					type="radio"
					checked={isSelected}
				/>
				<RadioCheck checked={isSelected} />
				{label}
			</label>
		</RadioWrapper>
	);
};

RadioButton.propTypes = {
	id: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	isSelected: PropTypes.bool.isRequired,
};

export default RadioButton;
