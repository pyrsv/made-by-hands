import React from 'react';
import ProductsCarouselIndex from '../Components/Carousels/ProductCarouselIndex/ProductCarouselIndex';
import PopularCategories from '../Components/PopularCategories/PopularCategories';
import InfoCarousel from '../Components/Carousels/InfoCarousel/InfoCarousel';

const IndexPage = () => {
	return (
		<>
			<InfoCarousel />
			<ProductsCarouselIndex />
			<PopularCategories />
		</>
	);
};

export default IndexPage;
