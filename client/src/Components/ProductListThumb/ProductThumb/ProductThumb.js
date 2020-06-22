import React from 'react';
import PropTypes from 'prop-types';
import {
	Product,
	ProductInfo,
	ProductImage,
	ProductName,
	ProductQuantity,
	ProductPrice,
	ProductDetails,
} from './styles';

const ProductThumb = ({ name, price, quantity, image }) => {
	return (
		<Product>
			<ProductImage src={image} alt={name} />
			<ProductInfo>
				<ProductName>{name}</ProductName>
				<ProductDetails>
					<ProductQuantity ProductQuantity>{quantity} pcs.</ProductQuantity>
					<ProductPrice>{price}€</ProductPrice>
				</ProductDetails>
			</ProductInfo>
		</Product>
	);
};

ProductThumb.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	quantity: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
};

export default ProductThumb;
