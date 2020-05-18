import React from 'react';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import PropTypes from 'prop-types';
import ProductsCarouselIndex from '../Components/Carousels/ProductCarouselIndex/ProductCarouselIndex';

const ProductPage = ({ productNoParam }) => {
	return (
		<>
			<ProductDescription productNoParam={productNoParam} />
			<ProductsCarouselIndex />
		</>
	);
};

ProductPage.propTypes = {
	productNoParam: PropTypes.string.isRequired,
};

export default ProductPage;
