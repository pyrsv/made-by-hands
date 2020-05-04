import React from 'react';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import PropTypes from 'prop-types';
import ProductsCarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';
import Footer from '../Components/Footer/Footer';

const ProductPage = ({ cartNoParam }) => {
	return (
		<>
			<ProductDescription cartNoParam={cartNoParam} />
			<ProductsCarousel />
			<Footer />
		</>
	);
};

ProductPage.propTypes = {
	cartNoParam: PropTypes.string.isRequired,
};

export default ProductPage;
