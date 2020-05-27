import axios from 'axios';
import {
	SEARCH_PRODUCTS_INIT,
	SEARCH_PRODUCTS_SUCCESS,
	SEARCH_PRODUCTS_ERROR,
} from '../types/searchTypes';
import { checkProductsForCartAndFavorites } from '../../utils/API';

const searchProductsInit = () => ({
	type: SEARCH_PRODUCTS_INIT,
});

const searchProductsSuccess = products => ({
	type: SEARCH_PRODUCTS_SUCCESS,
	payload: products,
});

const searchProductsError = err => ({
	type: SEARCH_PRODUCTS_ERROR,
	payload: err,
});

export const searchProducts = query => dispatch => {
	dispatch(searchProductsInit());

	axios
		.post('/products/search', { query })
		.then(res => {
			checkProductsForCartAndFavorites(
				res.data
			).then(productsWithCartAndFavorites =>
				dispatch(searchProductsSuccess(productsWithCartAndFavorites))
			);
		})
		.catch(err => dispatch(searchProductsError(err)));
};
