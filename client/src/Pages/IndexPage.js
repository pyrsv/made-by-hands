import React from 'react';
import Footer from '../Components/Footer/Footer';
import ProductsCarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';
import PopularCategories from '../Components/PopularCategories/PopularCategories';
import InfoCarousel from '../Components/Carousels/InfoCarousel/InfoCarousel';

const IndexPage = () => {
	return (
		<>
			<InfoCarousel />
			<ProductsCarousel />
			<PopularCategories />
			<Footer />
		</>
	);
};

export default IndexPage;
