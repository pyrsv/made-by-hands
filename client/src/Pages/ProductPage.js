import React from 'react';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import PropTypes from 'prop-types';

const ProductPage = ({ cartNoParam }) => {
	return (
		<>
			<ProductDescription cartNoParam={cartNoParam} />
		</>
	);
};

ProductPage.propTypes = {
	cartNoParam: PropTypes.string.isRequired,
};

export default ProductPage;
