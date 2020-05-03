import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useSelector, useDispatch } from 'react-redux';
import { loadMoreAction } from '../../store/actions/catalogActions';
import ProductCard from '../ProductCard/ProductCard';
import Preloader from '../UI/Preloader/Preloader';
import { ProductsContainer, ProductsPreloader } from './styles';

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
			loader={
				<ProductsPreloader>
					<Preloader size={60} />
				</ProductsPreloader>
			}
		>
			<ProductsContainer>
				{products.map(
					({
						name,
						currentPrice,
						previousPrice,
						itemNo,
            _id,
						imageUrls: [image],
					}) => (
						<ProductCard
						  id={_id}
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
