import React from 'react';
import ProductDescription from '../Components/ProductDescription/ProductDescription';
import PropTypes from 'prop-types';

const CartPage = ({ cartNoParam }) => {
	return (
		<>
			<ProductDescription cartNoParam={cartNoParam} />
		</>
	);
};

CartPage.propTypes = {
	cartNoParam: PropTypes.string.isRequired,
};

export default CartPage;
