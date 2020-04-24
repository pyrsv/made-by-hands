import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredItemsAction } from '../store/actions/getItemsAction';
import Filtered from './UI/Filtered';
import ProductCard from './ProductCard/ProductCard';

const Filter = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getFilteredItemsAction());
	}, []);
	const fItems = useSelector(state => state.itemsReducer.fItems);
	const filtered = fItems.products;
	// let product = fItems.products[0]
	// console.log(filtered); // есть массив

	return (
		<div>
			<Filtered>
				{filtered &&
					filtered.map(item => {
						// нету массива
						return (
							<>
								{/* {item.name} */}
								<ProductCard
									key={item.itemNo}
									name={item.name}
									img={item.imageUrls[0]}
									price={item.currentPrice}
								/>
							</>
						);
					})}
			</Filtered>
		</div>
	);
};

export default Filter;
