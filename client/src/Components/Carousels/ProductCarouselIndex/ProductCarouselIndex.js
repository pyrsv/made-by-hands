import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItemsForCarousel } from '../../../store/actions/getItemsAction';
import ProductsCarousel from '../ProductsCarousel/ProductsCarousel';

const ProductCarouselIndex = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getItemsForCarousel());
	}, [dispatch]);

	const selected = useSelector(state => state.allItems.items);

	return <ProductsCarousel selected={selected} />;
};

export default ProductCarouselIndex;
