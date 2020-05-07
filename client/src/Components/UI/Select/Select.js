import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { customStyles } from './styles';

const CustomSelect = ({
	options,
	searchable = false,
	placeholder,
	onChange,
}) => {
	return (
		<Select
			placeholder={placeholder}
			options={options}
			isSearchable={searchable}
			styles={customStyles}
			onChange={onChange}
		/>
	);
};

CustomSelect.propTypes = {
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
	searchable: PropTypes.bool.isRequired,
	placeholder: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string.isRequired,
	]).isRequired,
	onChange: PropTypes.func.isRequired,
};

export default CustomSelect;
