import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import Preloader from '../UI/Preloader/Preloader';
import ListSkeleton from './ListSkeleton/ListSkeleton';
import { ProductsContainer, ProductsPreloader } from './styles';

const ProductsList = ({
	products,
	productsQuantity,
	queryParams,
	startPage,
	perPage,
	isProductsFetching,
	scrollable,
	loadAction,
}) => {
	const dispatch = useDispatch();

	if (isProductsFetching) {
		return <ListSkeleton />;
	}
	return scrollable ? (
		<InfiniteScroll
			threshold={150}
			loadMore={() =>
				dispatch(loadAction({ perPage, startPage, ...queryParams }))
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
	) : (
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
	);
};

ProductsList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	isProductsFetching: PropTypes.bool.isRequired,
	scrollable: PropTypes.bool.isRequired,
	productsQuantity: PropTypes.number,
	queryParams: PropTypes.objectOf(PropTypes.string),
	startPage: PropTypes.number,
	perPage: PropTypes.number,
	loadAction: PropTypes.func,
};

ProductsList.defaultProps = {
	productsQuantity: 0,
	queryParams: {},
	startPage: 1,
	perPage: 12,
	loadAction: () => {},
};

export default ProductsList;
