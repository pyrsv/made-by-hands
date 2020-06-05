import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import querystring from 'query-string';
import { searchProducts } from '../../store/actions/catalogActions';
import { SearchSection } from './styles';
import Title from '../UI/Title/title';
import SearchList from './SearchList/SearchList';
import SearchInfo from './SearchInfo/SearchInfo';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

const Search = () => {
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
		<SearchSection>
			<LayoutContainer>
				<Title text="Search" color="dark" />
				{!isFetching && (
					<SearchInfo quantity={products.length} query={searchQuery} />
				)}
				<SearchList products={products} isFetching={isFetching} />
			</LayoutContainer>
		</SearchSection>
	);
};

export default Search;
