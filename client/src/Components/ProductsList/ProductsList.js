import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useSelector, useDispatch } from 'react-redux';
import { loadMoreAction } from '../../store/actions/catalogActions';
import ProductCard from '../ProductCard/ProductCard';
import { ProductsContainer } from './styles';

const ProductsList = () => {
	const dispatch = useDispatch();

	const products = useSelector(state => state.catalog.currentProducts);
	const productsQuantity = useSelector(state => state.catalog.productsQuantity);
	const config = useSelector(state => state.catalog.config);
	const isProductsFetching = useSelector(
		state => state.catalog.isProductsFetching
	);

	return (
		<InfiniteScroll
			threshold={100}
			loadMore={() => dispatch(loadMoreAction(config))}
			hasMore={products.length < productsQuantity && !isProductsFetching}
			// hasMore
			loader={
				<div className="loader" key={0}>
					Loading ...
				</div>
			}
		>
			<ProductsContainer>
				{products.map(
					({
						name,
						currentPrice,
						previousPrice,
						itemNo,
						imageUrls: [image],
					}) => (
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
		</InfiniteScroll>
	);
};

export default ProductsList;
