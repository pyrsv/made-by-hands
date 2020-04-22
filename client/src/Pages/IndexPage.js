import React from 'react';
import Header from '../Components/Header/Header';
import ProductsCarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';
import PopularCategories from '../Components/PopularCategories/PopularCategories';
import InfoCarousel from '../Components/Carousels/InfoCarousel/InfoCarousel';

const IndexPage = () => {
	return (
		<>
			<Header />
			<InfoCarousel />
			<ProductsCarousel />
			<PopularCategories />
		</>
	);
};

export default IndexPage;
