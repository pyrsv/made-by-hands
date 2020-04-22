import React from 'react';
import Header from '../Components/Header/Header';
import ProductsCarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';
import PopularCategories from '../Components/PopularCategories/PopularCategories';

const IndexPage = () => {
	return (
		<>
			<Header />
			<ProductsCarousel />
			<PopularCategories />
		</>
	);
};

export default IndexPage;
