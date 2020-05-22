import React from 'react';
import PropTypes from 'prop-types';
import CustomSelect from 'react-select';
import { customStyles } from './styles';

const Select = ({
	options,
	searchable,
	placeholder,
	onChange,
	isMobile,
	value,
}) => {
	return (
		<CustomSelect
			value={value}
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
	searchable: PropTypes.bool,
	placeholder: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.string.isRequired,
	]).isRequired,
	onChange: PropTypes.func.isRequired,
	isMobile: PropTypes.bool,
	value: PropTypes.oneOfType([
		PropTypes.shape({
			value: PropTypes.string,
			icon: PropTypes.string,
			label: PropTypes.oneOfType([PropTypes.node, PropTypes.string.isRequired]),
		}),
		PropTypes.oneOf([null]),
	]),
};

Select.defaultProps = {
	isMobile: false,
	searchable: false,
	value: null,
};

export default Select;
