import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItemsAction } from '../../../store/actions/getItemsAction';
import { getFilteredProducts } from '../../../store/actions/catalogActions';
import ProductsCarousel from '../ProductsCarousel/ProductsCarousel';

const ProductCarouselIndex = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getItemsAction());
	}, [dispatch]);

	const config = useSelector(state => state.catalog.config);

	useEffect(() => {
		dispatch(getFilteredProducts(config));
	}, []);

	const products = useSelector(state => state.catalog.currentProducts);

	// const shuffled = products.sort(() => 0.5 - Math.random());
	// const selected = shuffled.slice(0, 8);
	const selected = products.slice(0, 6);
	return <ProductsCarousel selected={selected} />;
};

export default ProductCarouselIndex;
