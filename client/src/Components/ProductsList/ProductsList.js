import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import querystring from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
	loadMoreAction,
	getFilteredProducts,
	updateConfig,
} from '../../store/actions/catalogActions';
import ProductCard from '../ProductCard/ProductCard';
import Preloader from '../UI/Preloader/Preloader';
import { ProductsContainer, ProductsPreloader } from './styles';

const ProductsList = () => {
	const dispatch = useDispatch();

	const location = useLocation();
	const currentParams = querystring.parse(location.search.slice(1));
	const products = useSelector(state => state.catalog.currentProducts);
	const productsQuantity = useSelector(state => state.catalog.productsQuantity);
	const config = useSelector(state => state.catalog.config);
	const isProductsFetching = useSelector(
		state => state.catalog.isProductsFetching
	);

	useEffect(() => {
		dispatch(
			getFilteredProducts({ ...currentParams, ...config, startPage: 1 })
		);
		return () => dispatch(updateConfig({ perPage: 12, startPage: 1 }));
	}, []);

	return (
		<InfiniteScroll
			threshold={150}
			loadMore={() => dispatch(loadMoreAction({ ...currentParams, ...config }))}
			hasMore={products.length < productsQuantity && !isProductsFetching}
			loader={
				<ProductsPreloader>
					<Preloader key="1" size={60} />
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
						isInCart,
						imageUrls: [image],
						isFavorite,
					}) => (
						<ProductCard
							id={_id}
							key={itemNo}
							itemNo={itemNo}
							name={name}
							img={image}
							price={currentPrice}
							oldPrice={previousPrice}
							type="olive"
							isInCart={isInCart}
							isFavorite={isFavorite}
						/>
					)
				)}
			</ProductsContainer>
		</InfiniteScroll>
	);
};

export default ProductsList;
