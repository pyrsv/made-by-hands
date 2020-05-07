import axios from 'axios';
import {
	GET_FILTERED_PRODUCTS_INIT,
	GET_FILTERED_PRODUCTS_ERROR,
	GET_FILTERED_PRODUCTS_SUCCESS,
	UPDATE_CONFIG,
	LOAD_MORE_PRODUCTS,
	SET_PRODUCT_TO_CART,
	SET_PRODUCT_TO_WISHLIST,
} from '../types/catalogTypes';
import { checkProductsForCartAndFavorites } from '../../utils/API';

const getFilteredProductsInit = () => ({
	type: GET_FILTERED_PRODUCTS_INIT,
});

const getFilteredProductsSuccess = (products, productsQuantity) => ({
	type: GET_FILTERED_PRODUCTS_SUCCESS,
	payload: {
		products,
		productsQuantity,
	},
});

const getFilteredProductsError = error => ({
	type: GET_FILTERED_PRODUCTS_ERROR,
	payload: error,
});

const updateConfig = params => ({
	type: UPDATE_CONFIG,
	payload: params,
});

const loadMoreProducts = products => ({
	type: LOAD_MORE_PRODUCTS,
	payload: products,
});

export const setProductToCart = id => ({
	type: SET_PRODUCT_TO_CART,
	payload: id,
});

export const setProductToWishlist = id => ({
	type: SET_PRODUCT_TO_WISHLIST,
	payload: id,
});

export const getFilteredProducts = config => dispatch => {
	dispatch(getFilteredProductsInit());
	dispatch(updateConfig(config));
	axios
		.get('/products/filter/', {
			params: {
				...config,
			},
		})
		.then(response => {
			checkProductsForCartAndFavorites(response.data.products).then(
				productsWithCartAndFavorites => {
					dispatch(
						getFilteredProductsSuccess(
							productsWithCartAndFavorites,
							response.data.productsQuantity
						)
					);
				}
			);
		})
		.catch(err => dispatch(getFilteredProductsError(err)));
};

export const loadMoreAction = config => dispatch => {
	axios
		.get('/products/filter', {
			params: {
				...config,
			},
		})
		.then(response => {
			dispatch(loadMoreProducts(response.data.products));
		});
};
