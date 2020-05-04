import {
	GET_CATEGORIES,
	GET_COLORS,
	GET_FILTERED_PRODUCTS_ERROR,
	GET_FILTERED_PRODUCTS_INIT,
	GET_FILTERED_PRODUCTS_SUCCESS,
	GET_BRANDS,
	UPDATE_CONFIG,
	LOAD_MORE_PRODUCTS,
} from '../types/catalogTypes';

const initialState = {
	categories: [],
	colors: [],
	brands: [],
	isProductsFetching: false,
	isProductsError: false,
	currentProducts: [],
	productsQuantity: 0,
	minPrice: 0,
	maxPrice: 2000,
	config: {
		perPage: 12,
		startPage: 1,
	},
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
		case GET_BRANDS:
			return {
				...state,
				brands: payload,
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
				config: {
					...state.config,
					startPage: state.config.startPage + 1,
				},
			};
		case GET_FILTERED_PRODUCTS_ERROR:
			return {
				...state,
				isProductsFetching: false,
				isProductsError: true,
			};
		case LOAD_MORE_PRODUCTS:
			return {
				...state,
				currentProducts: [...state.currentProducts, ...payload],
				config: {
					...state.config,
					startPage: state.config.startPage + 1,
				},
			};
		case UPDATE_CONFIG:
			return {
				...state,
				config: payload,
			};
		default:
			return state;
	}
};
