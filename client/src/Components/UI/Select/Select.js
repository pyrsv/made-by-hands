import React from 'react';
import PropTypes from 'prop-types';
import CustomSelect from 'react-select';
import { customStyles } from './styles';

const Select = ({
	options,
	searchable,
	placeholder,
	onChange,
	isMobile = true,
}) => {
	return (
		<CustomSelect
			placeholder={placeholder}
			options={options}
			isSearchable={searchable}
			styles={customStyles}
			onChange={onChange}
			isMobile={isMobile}
		/>
	);
};

Select.propTypes = {
	options: PropTypes.arrayOf(PropTypes.object).isRequired,
	searchable: PropTypes.bool.isRequired,
	placeholder: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string.isRequired,
	]).isRequired,
	onChange: PropTypes.func.isRequired,
	isMobile: PropTypes.bool,
};

Select.defaultProps = {
	isMobile: false,
};

export default Select;
