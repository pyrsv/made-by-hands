import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Formik, Field } from 'formik';
import querystring from 'query-string';
import {
	getFilteredProducts,
	getColorsAction,
} from '../../../store/actions/catalogActions';
import { getInitialFields } from '../../../utils/getFilterFields';
import Button from '../../UI/Button/Button';
import { FiltersContainer } from './styles';
import PriceRange from '../PriceRange/PriceRange';

const FilterBar = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();

	const [fields, setFields] = useState({});
	const categories = useSelector(state => state.catalog.categories);
	const color = useSelector(state => state.catalog.colors);
	const minPrice = useSelector(state => state.catalog.minPrice);
	const maxPrice = useSelector(state => state.catalog.maxPrice);
	const currentParams = querystring.parse(location.search.slice(1));

	useEffect(() => {
		dispatch(getColorsAction());
	}, []);

	useEffect(() => {
		dispatch(getFilteredProducts(currentParams));
	}, [location]);

	useEffect(() => {
		const initialFields = getInitialFields(currentParams, {
			categories,
			color,
		});
		setFields(initialFields);
	}, [categories, color]);

	return (
		<FiltersContainer>
			Filters
			<Formik
				enableReinitialize
				initialValues={{
					...fields,
				}}
				onSubmit={values => {
					const params = Object.entries(values).reduce((obj, [key, value]) => {
						obj[key] = Object.entries(value).reduce((arr, [name, checked]) => {
							// eslint-disable-next-line no-unused-expressions
							checked && arr.push(name);
							return arr;
						}, []);

						return obj;
					}, {});
					params.minPrice = minPrice;
					params.maxPrice = maxPrice;
					const str = querystring.stringify(params, { arrayFormat: 'comma' });
					history.push({
						search: `?${str}`,
					});
				}}
			>
				{({ values, handleSubmit, setFieldValue }) => {
					return (
						<>
							<br />
							<form onSubmit={handleSubmit}>
								<>
									<PriceRange />
									Categories
									{Object.entries(values.categories || {}).map(([key, val]) => {
										return (
											<Field
												component="input"
												type="checkbox"
												checked={val}
												name={`categories.${key}`}
												onChange={() =>
													setFieldValue(`categories.${key}`, !val)
												}
											/>
										);
									})}
									Colors
									{Object.entries(values.color || {}).map(([key, val]) => {
										return (
											<Field
												component="input"
												type="checkbox"
												checked={val}
												name={`color.${key}`}
												onChange={() => setFieldValue(`color.${key}`, !val)}
											/>
										);
									})}
								</>
								<Button type="Submit" text="Show" onClick={() => {}} />
							</form>
						</>
					);
				}}
			</Formik>
		</FiltersContainer>
	);
};

export default FilterBar;
