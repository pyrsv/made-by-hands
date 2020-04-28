import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { ProductsContainer } from './styles';

const ProductsList = () => {
	const products = useSelector(state => state.catalog.currentProducts);

	return (
		<ProductsContainer>
			{products.map(
				({ name, currentPrice, previousPrice, itemNo, imageUrls: [image] }) => (
					<ProductCard
						key={itemNo}
						name={name}
						img={image}
						price={currentPrice}
						oldPrice={previousPrice}
						type="olive"
					/>
				)
			)}
		</ProductsContainer>
	);
};

export default ProductsList;
