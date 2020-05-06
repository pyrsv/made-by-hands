import React, { useEffect, useState } from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ProductDescriptionContainer, MinHeight } from './Product/styles';
import Product from './Product/Product';

const ProductDescription = ({ productNoParam }) => {
	const [item, setItem] = useState({});

	const getProduct = param => {
		axios.get(`/products/${param}`).then(res => {
			setItem(res.data);
		});
	};
	useEffect(() => {
		getProduct(productNoParam);
	}, [productNoParam]);

	const {
		imageUrls,
		description,
		name,
		previousPrice,
		currentPrice,
		isInCart,
		parameters,
		isFavorite,
	} = item;

	return (
		<ProductDescriptionContainer>
			<LayoutContainer>
				{!item.itemNo ? (
					<MinHeight />
				) : (
					<Product
						imageUrls={imageUrls}
						description={description}
						name={name}
						previousPrice={previousPrice}
						currentPrice={currentPrice}
						isInCart={isInCart}
						parameters={parameters}
						isFavorite={isFavorite}
					/>
				)}
			</LayoutContainer>
		</ProductDescriptionContainer>
	);
};

ProductDescription.propTypes = {
	productNoParam: PropTypes.string.isRequired,
};

export default ProductDescription;
