import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../UI/Checkbox/Checkbox';
import { FiltersWrapper, FiltersName } from './styles';

const FilterGroup = ({
	name,
	fields,
	values,
	fieldsKey,
	setValue,
	checkboxType,
	children,
}) => {
	return (
		<FiltersWrapper>
			<FiltersName>{name}</FiltersName>
			{Object.entries(fields || {}).map(([key, val], index) => {
				return (
					<Checkbox
						key={values[index]._id}
						id={values[index]._id}
						checked={val}
						name={`.${key}`}
						label={values[index].name}
						onChange={() => setValue(`${fieldsKey}.${key}`, !val)}
						type={checkboxType}
						cssValue={values[index].cssValue}
					/>
				);
			})}
			{children}
		</FiltersWrapper>
	);
};

FilterGroup.propTypes = {
	name: PropTypes.string.isRequired,
	fields: PropTypes.arrayOf(PropTypes.object),
	values: PropTypes.objectOf(PropTypes.bool),
	fieldsKey: PropTypes.string,
	setValue: PropTypes.func,
	checkboxType: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

FilterGroup.defaultProps = {
	fields: {},
	values: [],
	fieldsKey: '',
	setValue: () => {},
	checkboxType: '',
	children: <></>,
};

export default FilterGroup;
