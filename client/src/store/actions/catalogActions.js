import axios from 'axios';
import {
	GET_CATEGORIES,
	GET_COLORS,
	GET_FILTERED_PRODUCTS_INIT,
	GET_FILTERED_PRODUCTS_ERROR,
	GET_FILTERED_PRODUCTS_SUCCESS,
	GET_BRANDS,
	UPDATE_CONFIG,
	LOAD_MORE_PRODUCTS,
	SET_PRODUCT_TO_CART,
	SET_PRODUCT_TO_WISHLIST,
} from '../types/catalogTypes';
import { checkProductsForCartAndFavorites } from '../../utils/API';

const getCategories = categories => ({
	type: GET_CATEGORIES,
	payload: categories,
});

const getColors = colors => ({
	type: GET_COLORS,
	payload: colors,
});

const getBrands = brands => ({
	type: GET_BRANDS,
	payload: brands,
});

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

export const getCategoriesAction = () => dispatch => {
	axios.get('/catalog').then(response => {
		dispatch(getCategories(response.data));
	});
};

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

export const getColorsAction = () => dispatch => {
	axios.get('/colors').then(response => dispatch(getColors(response.data)));
};

export const getBrandsAction = () => dispatch => {
	axios
		.get('/filters/brand')
		.then(response => dispatch(getBrands(response.data)));
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
