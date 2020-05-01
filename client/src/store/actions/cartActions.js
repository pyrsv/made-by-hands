import { SET_CART } from '../types/cartTypes';

export const setCartAction = data => ({
	type: SET_CART,
	payload: data,
});
