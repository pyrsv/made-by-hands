import React from 'react';
import Header from '../Components/Header/Header';
import Multicarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';
import { ProductCarouselContainer } from '../Components/Carousels/ProductsCarousel/styles'
const IndexPage = () => {
	return (
		<>
			<Header />
			<ProductCarouselContainer>
			<Multicarousel />
			</ProductCarouselContainer>
		</>
	);
};

export default IndexPage;
