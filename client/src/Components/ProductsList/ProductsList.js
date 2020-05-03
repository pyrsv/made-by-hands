import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { ProductsContainer } from './styles';
// import { addToCartActionCreator } from '../../store/actions/cartActions';

const ProductsList = () => {
	const products = useSelector(state => state.catalog.currentProducts);

	return (
		<ProductsContainer>
			{products.map(
				({
					name,
					currentPrice,
					previousPrice,
					_id,
					itemNo,
					imageUrls: [image],
				}) => (
					<ProductCard
						// onAddToCart={onAddToCart}
						id={_id}
						key={itemNo}
						name={name}
						img={image}
						price={currentPrice}
						oldPrice={previousPrice}
						itemNo={itemNo}
						type="olive"
					/>
				)
			)}
		</ProductsContainer>
	);
};

export default ProductsList;
