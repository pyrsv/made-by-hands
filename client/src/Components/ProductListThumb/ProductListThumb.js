import React from 'react';
import PropTypes from 'prop-types';
import ProductThumb from './ProductThumb/ProductThumb';
import {} from './styles';

const ProductListThumb = ({ products }) => {
	return products.map(product => {
		const {
			name,
			currentPrice,
			imageUrls: [image],
		} = product.product;
		return (
			<ProductThumb
				key={product._id}
				name={name}
				price={currentPrice}
				image={image}
				quantity={product.cartQuantity}
			/>
		);
	});
};

ProductListThumb.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductListThumb;
