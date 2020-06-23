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
		.put(`/api/cart/${id}`)
		.then(result => {
			dispatch(setCartAction(result.data.products));
		})
		.catch(err => {
			if (!localStorage.getItem('cart')) {
				localStorage.setItem('cart', []);
			}
			axios.get(`/api/products/${itemNo}`).then(result => {
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
		.delete(`/api/cart/product/${id}`)
		.then(result => {
			dispatch(setCartAction(result.data.products));
		})
		.catch(err => {
			axios.get(`/api/products/${itemNo}`).then(result => {
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
		.delete(`/api/cart/${id}`)
		.then(result => {
			let data = result.data.products;
			if (result.data.products[0].product._id === id) {
				data = [];
				axios.delete(`/api/cart`);
			}
			dispatch(setCartAction(data));
		})
		.catch(err => {
			axios.get(`/api/products/${itemNo}`).then(result => {
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
	const localCart = JSON.parse(localStorage.getItem('cart')) || [];

	const products = [
		...new Set([
			...localCart.map(({ product }) => product._id),
			...cartFromServer?.products.map(({ product }) => product._id || []),
		]),
	].map(id => {
		const cartQuantity =
			(localCart.find(item => item.product._id === id)?.cartQuantity || 0) +
			(cartFromServer?.products.find(item => item.product._id === id)
				?.cartQuantity || 0);
		const product = {
			product: id,
			cartQuantity,
		};

		return product;
	});

	axios
		.put('/api/cart', { products })
		.then(result => {
			dispatch(setCartAction(result.data.products));
		})
		.catch(err => {
			dispatch(updateCartError(err));
		});
};
