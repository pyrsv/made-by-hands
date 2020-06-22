import {
	GET_BRANDS_FAIL,
	GET_BRANDS_INIT,
	GET_BRANDS_SUCCESS,
	GET_CATEGORIES_FAIL,
	GET_CATEGORIES_INIT,
	GET_CATEGORIES_SUCCESS,
	GET_COLORS_FAIL,
	GET_COLORS_INIT,
	GET_COLORS_SUCCESS,
	GET_PRICE_RANGE_ERROR,
	GET_PRICE_RANGE_INIT,
	GET_PRICE_RANGE_SUCCESS,
} from '../types/filtersTypes';

const initialState = {
	categories: [],
	colors: [],
	brands: [],
	isCategoriesFetching: false,
	isColorsFetching: false,
	isBrandsFetching: false,
	isPriceRangeFetching: false,
	error: null,
	minPrice: 0,
	maxPrice: 0,
};

export const filtersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_CATEGORIES_INIT:
			return { ...state, isCategoriesFetching: true, error: null };
		case GET_CATEGORIES_SUCCESS:
			return { ...state, isCategoriesFetching: false, categories: payload };
		case GET_CATEGORIES_FAIL:
			return { ...state, isCategoriesFetching: false, error: payload };
		case GET_COLORS_INIT:
			return { ...state, isColorsFetching: true, error: null };
		case GET_COLORS_SUCCESS:
			return { ...state, isColorsFetching: false, colors: payload };
		case GET_COLORS_FAIL:
			return { ...state, isColorsFetching: false, error: payload };
		case GET_BRANDS_INIT:
			return { ...state, isBrandsFetching: true, error: null };
		case GET_BRANDS_SUCCESS:
			return { ...state, isBrandsFetching: false, brands: payload };
		case GET_BRANDS_FAIL:
			return { ...state, isBrandsFetching: false, error: payload };
		case GET_PRICE_RANGE_INIT:
			return { ...state, isPriceRangeFetching: true, error: null };
		case GET_PRICE_RANGE_SUCCESS:
			return {
				...state,
				isPriceRangeFetching: false,
				minPrice: payload.minPrice,
				maxPrice: payload.maxPrice,
			};
		case GET_PRICE_RANGE_ERROR:
			return { ...state, isPriceRangeFetching: false, error: payload };

		default:
			return state;
	}
};
