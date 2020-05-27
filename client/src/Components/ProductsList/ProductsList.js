import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch } from 'react-redux';
import { loadMoreAction } from '../../store/actions/catalogActions';
import ProductCard from '../ProductCard/ProductCard';
import Preloader from '../UI/Preloader/Preloader';
import { ProductsContainer, ProductsPreloader } from './styles';

const ProductsList = ({
	products,
	productsQuantity,
	queryParams,
	startPage,
	perPage,
	isProductsFetching,
}) => {
	const dispatch = useDispatch();

	return (
		<InfiniteScroll
			threshold={150}
			loadMore={() =>
				dispatch(loadMoreAction({ perPage, startPage, ...queryParams }))
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

ProductsList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	productsQuantity: PropTypes.number.isRequired,
	queryParams: PropTypes.objectOf(PropTypes.string).isRequired,
	startPage: PropTypes.number.isRequired,
	perPage: PropTypes.number.isRequired,
	isProductsFetching: PropTypes.bool.isRequired,
};

export default ProductsList;
