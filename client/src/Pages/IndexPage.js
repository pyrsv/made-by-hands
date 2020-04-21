import React from 'react';
import Header from '../Components/Header/Header';
import ProductsCarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';
import InfoCarousel from '../Components/Carousels/InfoCarousel/InfoCarousel'

const IndexPage = () => {
	return (
		<>
			<Header />
			<InfoCarousel />
			<ProductsCarousel />
		</>
	);
};

export default IndexPage;
