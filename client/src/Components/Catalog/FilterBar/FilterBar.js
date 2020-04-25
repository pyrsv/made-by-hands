import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import querystring from 'querystring';
import { FiltersContainer } from './styles';
import { getCategoriesAction } from '../../../store/actions/catalogActions';
import { Input } from '../../UI/InputFiels/styles';
import Button from '../../UI/Button/Button';

const FilterBar = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const currentParams = querystring.parse(location.search.slice(1));

	const categories = useSelector(state => state.catalog.categories);
	const colors = useSelector(state => state.catalog.colors);

	const fields = {
		categories: categories.reduce((obj, cat) => {
			obj[cat.id] = currentParams.categories === cat.id;
			return obj
		}, {})
	};

	console.log('fields', fields)

	useEffect(() => {
		dispatch(getCategoriesAction())
	}, [location]);

	// const getInitialValues = () => {
	// 	return {
	// 		categories: {
	// 			bags: false,
	// 			test: true,
	// 		},
	// 	};
	// };

	return (
		<FiltersContainer>
			Filters
			{Object.entries(fields).map(([key, value]) => {
				console.log('key', key, '\nvalue',  value)
				return (
					<Formik
						enableReinitialize
						initialValues={{ [key]: value }}
						onSubmit={values => {
							console.log(values);
						}}
					>
						{({
								values,
								handleChange,
								handleBlur,
								handleSubmit,
							}) => {
							console.log('values', values);
							return (
								<form onSubmit={handleSubmit}>
									{Object.values(values.categories).map((val, index) => {
										console.log(val, '<=====val')

										return (
											<label htmlFor={categories[index].id}>
												{categories[index].name}
												<Input
													type="checkbox"
													id={categories[index].id}
													name={categories[index].name}
													checked={val}
												/>
											</label>
										)


									})}
									<Button type="Submit" text="Show" onClick={() => {}} />
								</form>
							);
						}}
					</Formik>
				)
			})}

		</FiltersContainer>
	);
};

export default FilterBar;
