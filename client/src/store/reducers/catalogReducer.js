import {
	GET_CATEGORIES,
	GET_COLORS,
	GET_FILTERED_PRODUCTS_ERROR,
	GET_FILTERED_PRODUCTS_INIT,
	GET_FILTERED_PRODUCTS_SUCCESS,
} from '../types/catalogTypes';

const initialState = {
	categories: [],
	colors: [],
	brands: [],
	isProductsFetching: false,
	isProductsError: false,
	currentProducts: [],
	productsQuantity: 0,
};

export const catalogReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_CATEGORIES:
			return {
				...state,
				categories: payload,
			};
		case GET_COLORS:
			return {
				...state,
				colors: payload,
			};
		case GET_FILTERED_PRODUCTS_INIT:
			return {
				...state,
				isProductsFetching: true,
				isProductsError: false,
			};
		case GET_FILTERED_PRODUCTS_SUCCESS:
			return {
				...state,
				isProductsFetching: false,
				currentProducts: payload.products,
				productsQuantity: payload.productsQuantity,
			};
		case GET_FILTERED_PRODUCTS_ERROR:
			return {
				...state,
				isProductsFetching: false,
				isProductsError: true,
			};

		default:
			return state;
	}
};
