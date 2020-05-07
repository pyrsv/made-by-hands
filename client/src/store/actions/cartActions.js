import { SET_CART } from '../types/cartTypes';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { userLoginError } from './authActions';

export const UPDATE_CART_ERROR = 'UPDATE_CART_ERROR';

export const updateCartError = error => ({
	type: UPDATE_CART_ERROR,
	payload: error,
});

export const setCartAction = data => ({
	type: SET_CART,
	payload: data,
});

export const addToCart = (id, itemNo) => dispatch => {
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

export const deleteFromCart = (id, itemNo) => dispatch => {
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

export const deleteAllTheSameItems = (id, itemNo, btn) => dispatch => {
	btn.current.setAttribute('disabled', 'disabled');
	axios
		.delete(`/cart/${id}`)
		.then(result => {
			let data = result.data.products;
			if (result.data.products[0].product._id === id) {
				data = [];
				axios.delete(`/cart`);
			}
			dispatch(setCartAction(data));
		})
		.catch(err => {
			axios.get(`/products/${itemNo}`).then(result => {
				const requiredItem = result.data;
				const itemsFromLS = JSON.parse(localStorage.getItem('cart'));
				const filtered = itemsFromLS.filter(item => {
					return item.product._id !== requiredItem._id;
				});
				localStorage.setItem('cart', JSON.stringify(filtered));
				dispatch(setCartAction(filtered));
				dispatch(userLoginError(err));
			});
		});
};

export const updateCart = cartFromServer => dispatch => {
	const itemsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
	const arrayToSend = [];
	let i = 0;

	// eslint-disable-next-line no-restricted-syntax
	for (const item of itemsFromLocalStorage) {
		arrayToSend[i] = {};
		arrayToSend[i].cartQuantity = item.cartQuantity;
		// arrayToSend[i] = (({ cartQuantity }) => ({ cartQuantity }))(item);
		arrayToSend[i].product = item.product._id;
		// eslint-disable-next-line no-plusplus
		i++;
	}

	if (cartFromServer) {
		// eslint-disable-next-line no-restricted-syntax
		for (const item of cartFromServer.products) {
			// eslint-disable-next-line no-loop-func
			arrayToSend.map(el => {
				if (el.product === item.product._id) {
					// eslint-disable-next-line no-plusplus
					el.cartQuantity += item.cartQuantity;
				} else if (
					!arrayToSend.some(elem => {
						return elem.product === item.product._id;
					})
				) {
					arrayToSend[i] = {};
					arrayToSend[i].cartQuantity = item.cartQuantity;
					arrayToSend[i].product = item.product._id;
					// eslint-disable-next-line no-plusplus
					i++;
				}
				return undefined;
			});
		}
	}

	const updatedCart = {
		products: arrayToSend,
	};
	axios
		.put('/cart', updatedCart)
		.then(result => {
			//   console.log(result.data.products)
			dispatch(setCartAction(result.data.products));
		})
		.catch(err => {
			//   console.log(err)
			dispatch(updateCartError(err));
		});
};
