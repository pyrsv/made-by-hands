import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import querystring from 'query-string';
import { getColors, getBrands } from '../../../store/actions/filtersActions';
import { toggleFilters } from '../../../store/actions/UIActions';
import { getInitialFields } from '../../../utils/getFilterFields';
import Button from '../../UI/Button/Button';
import PriceRange from '../PriceRange/PriceRange';
import FilterGroup from '../FilterGroup/FilterGroup';
import { FiltersContainer, Title, FilterWrapper } from './styles';
import Preloader from '../../UI/Preloader/Preloader';
import { PreloaderContainer } from '../FilterGroup/styles';

const FilterBar = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const history = useHistory();

	const [fields, setFields] = useState({});

	const categories = useSelector(state => state.filters.categories);
	const color = useSelector(state => state.filters.colors);
	const brand = useSelector(state => state.filters.brands);
	const minPriceDB = useSelector(state => state.filters.minPrice);
	const maxPriceDB = useSelector(state => state.filters.maxPrice);
	const [priceRange, setPriceRange] = useState({
		minPrice: minPriceDB,
		maxPrice: maxPriceDB,
	});

	const isMobile = useSelector(state => state.UI.isHeaderMobile);
	const isCategoriesLoading = useSelector(
		state => state.filters.isCategoriesFetching
	);
	const isColorsLoading = useSelector(state => state.filters.isColorsFetching);
	const isBrandsLoading = useSelector(state => state.filters.isBrandsFetching);
	const isPriceLoading = useSelector(
		state => state.filters.isPriceRangeFetching
	);

	const handleChangePrice = (min, max) => {
		setPriceRange({ minPrice: min, maxPrice: max });
	};

	useEffect(() => {
		handleChangePrice(minPriceDB, maxPriceDB);
	}, [minPriceDB, maxPriceDB]);

	useEffect(() => {
		if (!color.length || !brand.length) {
			dispatch(getColors());
			dispatch(getBrands());
		}
	}, [dispatch, brand.length, color.length]);

	useEffect(() => {
		const currentParams = querystring.parse(location.search.slice(1));

		const initialFields = getInitialFields(currentParams, {
			categories,
			color,
			brand,
		});
		setFields(initialFields);
	}, [categories, color, brand, location.search]);

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
		if (isMobile) {
			dispatch(toggleFilters());
		}
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
									isLoading={isColorsLoading}
								/>
								<FilterGroup
									name="Colors"
									fields={values.color}
									values={color}
									fieldsKey="color"
									setValue={setFieldValue}
									checkboxType="color"
									isLoading={isBrandsLoading}
								/>
								<FilterGroup name="Price">
									{isPriceLoading ? (
										<PreloaderContainer>
											<Preloader size={40} />
										</PreloaderContainer>
									) : (
										<PriceRange
											changeRange={handleChangePrice}
											minPrice={priceRange.minPrice}
											maxPrice={priceRange.maxPrice}
											mostCheap={minPriceDB}
											mostExpensive={maxPriceDB}
										/>
									)}
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
