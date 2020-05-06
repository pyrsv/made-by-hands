import React from 'react';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import PropTypes from 'prop-types';
import ProductsCarousel from '../Components/Carousels/ProductsCarousel/ProductsCarousel';

const ProductPage = ({ productNoParam }) => {
	return (
		<>
			<ProductDescription productNoParam={productNoParam} />
			<ProductsCarousel />
		</>
	);
};

ProductPage.propTypes = {
	productNoParam: PropTypes.string.isRequired,
};

export default ProductPage;
