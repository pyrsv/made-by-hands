import React from 'react';
import ProductsCarouselIndex from '../Components/Carousels/ProductCarouselIndex/ProductCarouselIndex';
import PopularCategories from '../Components/PopularCategories/PopularCategories';
import InfoCarousel from '../Components/Carousels/InfoCarousel/InfoCarousel';
import WhyWe from '../Components/WhyWe/WhyWe';

const IndexPage = () => {
	return (
		<>
			<InfoCarousel />
			<ProductsCarouselIndex />
			<WhyWe />
			<PopularCategories />
		</>
	);
};

export default IndexPage;
