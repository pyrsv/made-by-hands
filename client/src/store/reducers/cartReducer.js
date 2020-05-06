import { SET_CART } from '../types/cartTypes';

const initialState = { currentCart: [] };

export const cartReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_CART:
			return { ...state, currentCart: payload };
		default:
			return state;
	}
};
