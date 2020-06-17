import React, { useEffect, useMemo } from 'react';
import querystring from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ProductsList from '../../ProductsList/ProductsList';
import {
	getFilteredProducts,
	updateConfig,
} from '../../../store/actions/catalogActions';
import { NoMatchPlaceholder, StyledLink } from './styles';

const CatalogList = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const products = useSelector(state => state.catalog.currentProducts);
	const productsQuantity = useSelector(state => state.catalog.productsQuantity);
	const perPage = useSelector(state => state.catalog.perPage);
	const startPage = useSelector(state => state.catalog.startPage);
	const isProductsFetching = useSelector(
		state => state.catalog.isProductsFetching
	);

	const currentParams = useMemo(
		() => querystring.parse(location.search.slice(1)),
		[location.search]
	);

	useEffect(() => {
		dispatch(getFilteredProducts({ perPage, ...currentParams, startPage: 1 }));
		return () => dispatch(updateConfig({ perPage: 12, startPage: 1 }));
	}, [location, dispatch, perPage, currentParams]);

	return (
		<>
			{products.length > 0 ? (
				<ProductsList
					products={products}
					productsQuantity={productsQuantity}
					queryParams={currentParams}
					startPage={startPage}
					perPage={perPage}
					isProductsFetching={isProductsFetching}
					scrollable
				/>
			) : (
				<div>
					<NoMatchPlaceholder>
						We didn&apos;t found products on your query :(.
					</NoMatchPlaceholder>
					<NoMatchPlaceholder>
						But you can still discover our&nbsp;
						<StyledLink to="/catalog">catalog.</StyledLink>
					</NoMatchPlaceholder>
				</div>
			)}
		</>
	);
};

export default CatalogList;
