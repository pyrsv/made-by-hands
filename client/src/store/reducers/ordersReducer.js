import {
	PLACE_ORDER_INIT,
	PLACE_ORDER_FAIL,
	PLACE_ORDER_SUCCESS,
} from '../types/ordersTypes';

const initialState = {
	error: null,
	isOrdersFetching: false,
	isOrdersError: false,
	orders: [],
};

export const ordersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case PLACE_ORDER_INIT:
			return {
				...state,
				isOrdersFetching: true,
				isOrdersError: false,
			};
		case PLACE_ORDER_FAIL:
			return {
				...state,
				isOrdersFetching: false,
				isOrdrersError: payload,
			};
		case PLACE_ORDER_SUCCESS:
			return {
				...state,
				isOrdersFetching: false,
				orders: [...state.orders, ...payload],
			};
		default:
			return state;
	}
};
