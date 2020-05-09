import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { useSelector, useDispatch } from 'react-redux';
import { loadMoreAction } from '../../store/actions/catalogActions';
import ProductCard from '../ProductCard/ProductCard';
import Preloader from '../UI/Preloader/Preloader';
import { ProductsContainer, ProductsPreloader } from './styles';
import NotLoggedInModal from '../UI/Modals/NotLoggedInModal';

const ProductsList = () => {
	const dispatch = useDispatch();
	const [isModal, toggleModal] = useState({ open: false });

	const modalToggler = () => {
		toggleModal(prevState => ({
			open: !prevState.open,
		}));
	};

	const products = useSelector(state => state.catalog.currentProducts);
	const productsQuantity = useSelector(state => state.catalog.productsQuantity);
	const config = useSelector(state => state.catalog.config);
	const isProductsFetching = useSelector(
		state => state.catalog.isProductsFetching
	);
	if (products.length)
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
					{isModal.open && <NotLoggedInModal toggleModal={modalToggler} />}

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
								modalToggler={modalToggler}
							/>
						)
					)}
				</ProductsContainer>
			</InfiniteScroll>
		);
	return null;
};

export default ProductsList;
