import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import Title from '../UI/Title/title';
import FilterButtons from './FilterButtons/FilterButtons';
import FilterBar from './FilterBar/FilterBar';
import ProductsList from '../ProductsList/ProductsList';
import { CatalogContainer, Content } from './styles';
import {
	updateConfig,
	getFilteredProducts,
} from '../../store/actions/catalogActions';

const Catalog = () => {
	const dispatch = useDispatch();
	const config = useSelector(state => state.catalog.config);

	useEffect(() => {
		dispatch(getFilteredProducts(config));
		return () =>
			dispatch(updateConfig({ ...config, perPage: 12, startPage: 1 }));
	}, []);

	return (
		<CatalogContainer>
			<LayoutContainer>
				<Title text="catalog" color="dark" />
				<FilterButtons />
				<Content>
					<FilterBar />
					<ProductsList />
				</Content>
			</LayoutContainer>
		</CatalogContainer>
	);
};

export default Catalog;
