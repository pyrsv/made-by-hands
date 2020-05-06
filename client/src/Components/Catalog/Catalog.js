import React from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import Title from '../UI/Title/title';
import FilterButtons from './FilterButtons/FilterButtons';
import FilterBar from './FilterBar/FilterBar';
import ProductsList from '../ProductsList/ProductsList';
import { CatalogContainer, Content } from './styles';

const Catalog = () => {
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
