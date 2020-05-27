import {
	SEARCH_PRODUCTS_INIT,
	SEARCH_PRODUCTS_SUCCESS,
	SEARCH_PRODUCTS_ERROR,
} from '../types/searchTypes';

const initialState = {
	products: [],
	isFetching: false,
	error: null,
};

export const searchReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SEARCH_PRODUCTS_INIT:
			return {
				...state,
				isFetching: true,
				error: null,
			};
		case SEARCH_PRODUCTS_SUCCESS:
			return {
				...state,
				isFetching: false,
				products: payload,
			};
		case SEARCH_PRODUCTS_ERROR:
			return {
				...state,
				isFetching: false,
				error: payload,
			};
		default:
			return state;
	}
};
