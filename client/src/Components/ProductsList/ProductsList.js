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
		return () =>
			dispatch(updateConfig({ ...config, perPage: 12, startPage: 1 }));
	}, []);

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
				{/* {isModal.open && <NotLoggedInModal toggleModal={toggleModal} />} */}
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
							name={name}
							img={image}
							price={currentPrice}
							oldPrice={previousPrice}
							type="olive"
							itemNo={itemNo}
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
