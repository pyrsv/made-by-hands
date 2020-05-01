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
				const addingItem = result.data;
				const LSItems = JSON.parse(localStorage.getItem('cart'));

				// console.log(LSItems)

				LSItems.push(addingItem);

				localStorage.setItem('cart', JSON.stringify(LSItems));
				dispatch(userLoginError(err));
			});
		});
};
