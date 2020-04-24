import React from 'react';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import ProductsCarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';
import PopularCategories from '../Components/PopularCategories/PopularCategories';
import InfoCarousel from '../Components/Carousels/InfoCarousel/InfoCarousel';
import Filter from '../Components/Filter';

const IndexPage = () => {
	return (
		<>
			<Header />
			<InfoCarousel />
			<Filter />
			<ProductsCarousel />
			<PopularCategories />
			<Footer />
		</>
	);
};

export default IndexPage;
