import React from 'react';
import PropTypes from 'prop-types';
import {
	CheckboxContainer,
	HiddenCheckbox,
	DefaultCheckbox,
	ColorCheckbox,
	Label,
} from './styles';

const Checkbox = ({ id, label, onChange, checked, type, cssValue }) => {
	return (
		<CheckboxContainer>
			<Label htmlFor={id}>
				<HiddenCheckbox id={id} checked={checked} onChange={onChange} />

				{type === 'color' ? (
					<ColorCheckbox checked={checked} cssValue={cssValue} />
				) : (
					<DefaultCheckbox checked={checked} />
				)}

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
	type: PropTypes.oneOf(['default', 'color']),
	cssValue: PropTypes.string,
};

Checkbox.defaultProps = {
	type: 'default',
	cssValue: '#000000',
};
export default Checkbox;
