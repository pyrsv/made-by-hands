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
			// console.log(result.data.products)
			dispatch(setCartAction(result.data.products));
		})
		.catch(err => {
			// console.log("catch")
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
				dispatch(userLoginError(err));
			});
		});
};
