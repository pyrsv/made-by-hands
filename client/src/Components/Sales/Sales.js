import React, { useEffect } from 'react';
import Title from '../UI/Title/title';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import SalesList from './SalesList/SalesList';
import { useSelector, useDispatch } from 'react-redux';
import {
	getProductsOnSale,
	updateConfig,
} from '../../store/actions/catalogActions';

const Sales = () => {
	const dispatch = useDispatch();
	const products = useSelector(state => state.catalog.currentProducts);
	const quantity = useSelector(state => state.catalog.productsQuantity);
	const perPage = useSelector(state => state.catalog.perPage);
	const startPage = useSelector(state => state.catalog.startPage);
	const isProductsFetching = useSelector(
		state => state.catalog.isProductsFetching
	);

	useEffect(() => {
		dispatch(getProductsOnSale({ perPage, startPage: 1 }));
		return () => dispatch(updateConfig({ perPage: 12, startPage: 1 }));
	}, [dispatch]);

	return (
		<section>
			<LayoutContainer>
				<Title text="Sales" color="dark" />
				<SalesList
					products={products}
					quantity={quantity}
					startPage={startPage}
					perPage={perPage}
					isFetching={isProductsFetching}
				/>
			</LayoutContainer>
		</section>
	);
};

export default Sales;
