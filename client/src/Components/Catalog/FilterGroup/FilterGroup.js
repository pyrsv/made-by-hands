import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../UI/Checkbox/Checkbox';
import Preloader from '../../UI/Preloader/Preloader';
import {
	FiltersWrapper,
	FiltersName,
	PreloaderContainer,
	CheckboxesWrapper,
} from './styles';

const FilterGroup = ({
	name,
	fields,
	values,
	fieldsKey,
	setValue,
	checkboxType,
	children,
	isLoading,
	narrow,
}) => {
	return (
		<FiltersWrapper narrow={narrow}>
			<FiltersName>{name}</FiltersName>
			<CheckboxesWrapper>
				{isLoading ? (
					<PreloaderContainer>
						<Preloader size={40} />
					</PreloaderContainer>
				) : (
					Object.entries(fields || {}).map(([key, val], index) => {
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
					})
				)}
			</CheckboxesWrapper>
			{children}
		</FiltersWrapper>
	);
};

FilterGroup.propTypes = {
	name: PropTypes.string.isRequired,
	fields: PropTypes.objectOf(PropTypes.bool),
	values: PropTypes.arrayOf(PropTypes.object),
	fieldsKey: PropTypes.string,
	setValue: PropTypes.func,
	checkboxType: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	isLoading: PropTypes.bool,
	narrow: PropTypes.bool,
};

FilterGroup.defaultProps = {
	fields: {},
	values: [],
	fieldsKey: '',
	setValue: () => {},
	checkboxType: '',
	children: <></>,
	isLoading: false,
	narrow: false,
};

export default FilterGroup;
