import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import querystring from 'query-string';
import { getColors, getBrands } from '../../../store/actions/filtersActions';
import { getInitialFields } from '../../../utils/getFilterFields';
import Button from '../../UI/Button/Button';
import PriceRange from '../PriceRange/PriceRange';
import FilterGroup from '../FilterGroup/FilterGroup';
import { FiltersContainer, Title, FilterWrapper } from './styles';

const FilterBar = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();

	const [fields, setFields] = useState({});
	const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: 2000 });

	const categories = useSelector(state => state.filters.categories);
	const color = useSelector(state => state.filters.colors);
	const brand = useSelector(state => state.filters.brands);

	const isCategoriesLoading = useSelector(
		state => state.filters.isCategoriesFetching
	);
	const isColorsLoading = useSelector(state => state.filters.isColorsFetching);
	const isBrandsLoading = useSelector(state => state.filters.isBrandsFetching);

	const currentParams = querystring.parse(location.search.slice(1));
	useEffect(() => {
		if (!color.length || !brand.length) {
			dispatch(getColors());
			dispatch(getBrands());
		}
	}, []);

	useEffect(() => {
		const initialFields = getInitialFields(currentParams, {
			categories,
			color,
			brand,
		});
		setFields(initialFields);
	}, [categories, color, brand]);

	const handleChangePrice = (min, max) => {
		setPriceRange({ minPrice: min, maxPrice: max });
	};

	const handleFilterSubmit = values => {
		const params = Object.entries(values).reduce((obj, [key, value]) => {
			obj[key] = Object.entries(value).reduce((arr, [name, checked]) => {
				// eslint-disable-next-line no-unused-expressions
				checked && arr.push(name);
				return arr;
			}, []);

			return obj;
		}, {});
		params.minPrice = priceRange.minPrice;
		params.maxPrice = priceRange.maxPrice;
		const str = querystring.stringify(params, {
			arrayFormat: 'comma',
			skipEmptyString: true,
		});
		history.push({
			search: `?${str}`,
		});
	};

	return (
		<FilterWrapper>
			<FiltersContainer>
				<Title>Filters</Title>

				<Formik
					enableReinitialize
					initialValues={{
						...fields,
					}}
					onSubmit={values => handleFilterSubmit(values)}
				>
					{({ values, handleSubmit, setFieldValue }) => {
						return (
							<form onSubmit={handleSubmit}>
								<FilterGroup
									name="Categories"
									fields={values.categories}
									values={categories}
									fieldsKey="categories"
									setValue={setFieldValue}
									checkboxType="default"
									isLoading={isCategoriesLoading}
								/>
								<FilterGroup
									name="Brands"
									fields={values.brand}
									values={brand}
									fieldsKey="brand"
									setValue={setFieldValue}
									checkboxType="default"
									isLoading={isBrandsLoading}
								/>
								<FilterGroup
									name="Colors"
									fields={values.color}
									values={color}
									fieldsKey="color"
									setValue={setFieldValue}
									checkboxType="color"
									isLoading={isColorsLoading}
								/>
								<FilterGroup name="Price">
									<PriceRange changeRange={handleChangePrice} />
								</FilterGroup>

								<Button type="Submit" text="Show" onClick={() => {}} />
							</form>
						);
					}}
				</Formik>
			</FiltersContainer>
		</FilterWrapper>
	);
};

export default FilterBar;
