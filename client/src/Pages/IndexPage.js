import React from 'react';
import Header from '../Components/Header/Header';
import Multicarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';
import { MulticarouselContainer } from '../Components/Carousels/ProductsCarousel/styles'
const IndexPage = () => {
	return (
		<>
			<Header />
			<MulticarouselContainer>
			<Multicarousel />
			</MulticarouselContainer>
		</>
	);
};

export default IndexPage;
