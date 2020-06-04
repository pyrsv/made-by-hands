import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import querystring from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { searchProducts } from '../../../store/actions/catalogActions';
import ProductsList from '../../ProductsList/ProductsList';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';

const SearchList = () => {
	const dispatch = useDispatch();
	const location = useLocation();

	const products = useSelector(state => state.catalog.currentProducts);
	const isFetching = useSelector(state => state.catalog.isProductsFetching);

	const searchQuery = querystring.parse(location.search, {
		arrayFormat: 'comma',
	}).query;

	useEffect(() => {
		dispatch(searchProducts(searchQuery));
	}, [searchQuery, dispatch]);

	return (
		<LayoutContainer>
			<ProductsList
				isProductsFething={isFetching}
				products={products}
				scrollable={false}
			/>
		</LayoutContainer>
	);
};

export default SearchList;
