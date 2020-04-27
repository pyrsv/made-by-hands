import React from 'react';
import PropTypes from 'prop-types';
import {
	CheckboxContainer,
	HiddenCheckbox,
	StyledCheckbox,
	Label,
} from './styles';

const Checkbox = ({ id, label, onChange, checked }) => {
	return (
		<CheckboxContainer>
			<Label htmlFor={id}>
				<HiddenCheckbox id={id} checked={checked} onChange={onChange} />
				<StyledCheckbox checked={checked} />
				{label}
			</Label>
		</CheckboxContainer>
	);
};

Checkbox.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	checked: PropTypes.bool.isRequired,
};

export default Checkbox;
