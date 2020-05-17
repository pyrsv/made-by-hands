import {
	GET_CAROUSEL_ARRIVALS_ERROR,
	GET_CAROUSEL_ARRIVALS_SUCCESS,
	SET_PRODUCT_TO_WISHLIST,
	SET_PRODUCT_TO_CART,
	GET_CAROUSEL_ARRIVALS_INIT,
} from '../types/carouselArrivalsTypes';

const initialCarouselArrivals = {
	carouselArrivals: [],
	getcarouselArrivalsError: null,
	isProductsFetching: false,
	isProductsError: false,
};

export const carouselArrivalsReducer = (
	state = initialCarouselArrivals,
	action
) => {
	switch (action.type) {
		case GET_CAROUSEL_ARRIVALS_INIT:
			return {
				...state,
				isProductsFetching: true,
				isProductsError: false,
			};

		case GET_CAROUSEL_ARRIVALS_ERROR:
			return {
				...state,
				getcarouselArrivalsError: action.payload,
				isProductsFetching: false,
				isProductsError: true,
			};

		case GET_CAROUSEL_ARRIVALS_SUCCESS:
			return {
				...state,
				carouselArrivals: action.payload,
				isProductsFetching: false,
			};

		case SET_PRODUCT_TO_CART:
			return {
				...state,
				carouselArrivals: state.carouselArrivals.map(prod => {
					return prod._id === action.payload
						? { ...prod, isInCart: !prod.isInCart }
						: prod;
				}),
			};

		case SET_PRODUCT_TO_WISHLIST:
			return {
				...state,
				carouselArrivals: state.carouselArrivals.map(prod => {
					return prod._id === action.payload
						? { ...prod, isFavorite: !prod.isFavorite }
						: prod;
				}),
				currentProductId: null,
			};
		default: {
			return {
				...state,
			};
		}
	}
};
