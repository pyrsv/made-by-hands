import React, { useEffect, useMemo } from 'react';
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
	const currentParams = useMemo(
		() => querystring.parse(location.search.slice(1)),
		[location.search]
	);

	const products = useSelector(state => state.catalog.currentProducts);
	const productsQuantity = useSelector(state => state.catalog.productsQuantity);
	const perPage = useSelector(state => state.catalog.perPage);
	const startPage = useSelector(state => state.catalog.startPage);
	const isProductsFetching = useSelector(
		state => state.catalog.isProductsFetching
	);

	useEffect(() => {
		dispatch(getFilteredProducts({ perPage, ...currentParams, startPage: 1 }));
		return () => dispatch(updateConfig({ perPage: 12, startPage: 1 }));
	}, [location, dispatch, perPage]);

	return (
		<InfiniteScroll
			threshold={150}
			loadMore={() =>
				dispatch(loadMoreAction({ perPage, startPage, ...currentParams }))
			}
			hasMore={products.length < productsQuantity && !isProductsFetching}
			loader={
				<ProductsPreloader key="1">
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
						isInCart,
						imageUrls: [image],
						isFavorite,
					}) => (
						<ProductCard
							id={_id}
							key={_id}
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
