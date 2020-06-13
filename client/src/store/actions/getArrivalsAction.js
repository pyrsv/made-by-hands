import axios from 'axios';
import { checkProductsForCartAndFavorites } from '../../utils/API';
import {
	GET_CAROUSEL_ARRIVALS_SUCCESS,
	GET_CAROUSEL_ARRIVALS_ERROR,
	GET_CAROUSEL_ARRIVALS_INIT,
} from '../types/carouselArrivalsTypes';

const arrivalsSuccess = data => ({
	type: GET_CAROUSEL_ARRIVALS_SUCCESS,
	payload: data,
});

const arrivalsError = error => ({
	type: GET_CAROUSEL_ARRIVALS_ERROR,
	payload: error,
});

const getArrivalsInit = () => ({
	type: GET_CAROUSEL_ARRIVALS_INIT,
});

export const getItemsForCarousel = () => dispatch => {
	dispatch(getArrivalsInit);
	axios
		.get('/api/products/filter', {
			params: {
				perPage: '6',
				sort: '-date',
			},
		})
		.then(allProducts => {
			checkProductsForCartAndFavorites(allProducts.data.products)
				.then(products => {
					dispatch(arrivalsSuccess(products));
				})

				.catch(err => dispatch(arrivalsError(err)));
		});
};
