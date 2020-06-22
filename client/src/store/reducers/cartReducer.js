import { SET_CART, CART_INIT, UPDATE_CART_ERROR } from '../types/cartTypes';

const initialState = {
	currentCart: [],
	updateCartError: null,
	isCartFetching: false,
};

export const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CART_INIT:
			return {
				...state,
				updateCartError: null,
				isCartFetching: true,
			};

		case SET_CART:
			return { ...state, currentCart: payload, isCartFetching: false };

		case UPDATE_CART_ERROR:
			return { ...state, updateCartError: payload, isCartFetching: false };

		default:
			return state;
	}
};
