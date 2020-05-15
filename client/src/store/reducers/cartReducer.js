import { SET_CART } from '../types/cartTypes';
import { UPDATE_CART_ERROR } from '../actions/cartActions';

const initialState = { currentCart: [], updateCartError: null };

export const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_CART:
			return { ...state, currentCart: payload };

		case UPDATE_CART_ERROR:
			return { ...state, updateCartError: payload };

		default:
			return state;
	}
};
