import React from 'react';
import Header from '../Components/Header/Header';
import ProductsCarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';
import LayoutContainer from '../Components/LayoutContainer/LayoutContainer.js';
import { ProductCarouselContainer } from '../Components/Carousels/ProductsCarousel/styles';
const IndexPage = () => {
	return (
		<>
			<Header />
			<ProductsCarousel />
		</>
	);
};

export default IndexPage;
