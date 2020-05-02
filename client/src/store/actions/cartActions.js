import { SET_CART } from '../types/cartTypes';
import axios from 'axios';

// eslint-disable-next-line import/no-cycle
import { userLoginError } from './authActions';

export const setCartAction = data => ({
	type: SET_CART,
	payload: data,
});

export const AddToCartActionCreator = (id, itemNo) => dispatch => {
	axios
		.put(`/cart/${id}`)
		.then(result => {
			dispatch(setCartAction(result.data.products));
		})
		.catch(err => {
			if (!localStorage.getItem('cart')) {
				localStorage.setItem('cart', []);
			}
			axios.get(`/products/${itemNo}`).then(result => {
				const requiredItem = result.data;
				const LSItems = JSON.parse(localStorage.getItem('cart'));
				let inLS = false;
				// eslint-disable-next-line array-callback-return
				LSItems.map(item => {
					if (item.product._id === requiredItem._id) {
						// eslint-disable-next-line no-plusplus
						item.cartQuantity++;
						inLS = true;
					}
				});
				if (!inLS) {
					const addingItem = {};
					addingItem.product = requiredItem;
					addingItem.cartQuantity = 1;

					LSItems.push(addingItem);
				}
				localStorage.setItem('cart', JSON.stringify(LSItems));
				dispatch(setCartAction(LSItems));
				dispatch(userLoginError(err));
			});
		});
};

export const DeleteFromCartActionCreator = (id, itemNo) => dispatch => {
	axios
		.delete(`/cart/product/${id}`)
		.then(result => {
			dispatch(setCartAction(result.data.products));
		})
		.catch(err => {
			axios.get(`/products/${itemNo}`).then(result => {
				const requiredItem = result.data;
				const itemsFromLS = JSON.parse(localStorage.getItem('cart'));
				// eslint-disable-next-line array-callback-return
				itemsFromLS.map(item => {
					if (item.product._id === requiredItem._id) {
						// eslint-disable-next-line no-plusplus
						item.cartQuantity--;
						dispatch(setCartAction(itemsFromLS));
						localStorage.setItem('cart', JSON.stringify(itemsFromLS));
						if (!item.cartQuantity) {
							const filteredItemsFromLS = itemsFromLS.filter(i => {
								return i.product._id !== item.product._id;
							});
							dispatch(setCartAction(filteredItemsFromLS));
							localStorage.setItem('cart', JSON.stringify(filteredItemsFromLS));
						}
					}
				});

				dispatch(userLoginError(err));
			});
		});
};
