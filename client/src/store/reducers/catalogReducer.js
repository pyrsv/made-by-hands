import {
	GET_FILTERED_PRODUCTS_ERROR,
	GET_FILTERED_PRODUCTS_INIT,
	GET_FILTERED_PRODUCTS_SUCCESS,
	UPDATE_CONFIG,
	LOAD_MORE_PRODUCTS,
	SET_PRODUCT_TO_CART,
	SET_PRODUCT_TO_WISHLIST,
	SET_CURRENT_PRODUCT_ID,
} from '../types/catalogTypes';

const initialState = {
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
	currentProductId: null,
};

export const catalogReducer = (state = initialState, { type, payload }) => {
	switch (type) {
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
				config: { perPage: payload.perPage, startPage: payload.startPage },
			};
		case SET_PRODUCT_TO_CART:
			return {
				...state,
				currentProducts: state.currentProducts.map(prod => {
					return prod._id === payload
						? { ...prod, isInCart: !prod.isInCart }
						: prod;
				}),
			};
		case SET_PRODUCT_TO_WISHLIST:
			return {
				...state,
				currentProducts: state.currentProducts.map(prod => {
					return prod._id === payload
						? { ...prod, isFavorite: !prod.isFavorite }
						: prod;
				}),
				currentProductId: null,
			};
		case SET_CURRENT_PRODUCT_ID: {
			return {
				...state,
				currentProductId: payload,
			};
		}
		default:
			return state;
	}
};
