import React from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import Title from '../UI/Title/title';
import FilterBar from './FilterBar/FilterBar';
import ProductsList from '../ProductsList/ProductsList';
import { CatalogContainer, Content } from './styles';

const Catalog = () => {
	return (
		<CatalogContainer>
			<LayoutContainer>
				<Title text="catalog" color="dark" />
				<Content>
					<FilterBar />
					<ProductsList />
				</Content>
			</LayoutContainer>
		</CatalogContainer>
	);
};

export default Catalog;
