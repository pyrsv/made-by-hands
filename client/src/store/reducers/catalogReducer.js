import {
	GET_FILTERED_PRODUCTS_ERROR,
	GET_FILTERED_PRODUCTS_INIT,
	GET_FILTERED_PRODUCTS_SUCCESS,
	LOAD_MORE_PRODUCTS,
	SET_PRODUCT_TO_CART,
	SET_PRODUCT_TO_WISHLIST,
} from '../types/catalogTypes';

const initialState = {
	isProductsFetching: false,
	isProductsError: false,
	currentProducts: [],
	productsQuantity: 0,
	minPrice: 0,
	maxPrice: 2000,
	perPage: 12,
	startPage: 1,
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
				startPage: state.startPage + 1,
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
				startPage: state.startPage + 1,
			};
		// case UPDATE_CONFIG:
		// 	return {
		// 		...state,
		// 		config: {
		// 			startPage: payload.startPage,
		// 			perPage: payload.perPage,
		// 		},
		// 	};
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
		default:
			return state;
	}
};
