import axios from 'axios';
import {
	GET_CATEGORIES,
	GET_COLORS,
	GET_BRANDS,
	GET_FILTERED_PRODUCTS_INIT,
	GET_FILTERED_PRODUCTS_ERROR,
	GET_FILTERED_PRODUCTS_SUCCESS,
} from '../types/catalogTypes';

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

const getFilteredProductsSuccess = ({ products, productsQuantity }) => ({
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

export const getCategoriesAction = () => dispatch => {
	axios.get('/catalog').then(response => {
		dispatch(getCategories(response.data));
	});
};

export const getFilteredProducts = params => dispatch => {
	dispatch(getFilteredProductsInit());
	axios
		.get('/products/filter/', {
			params,
		})
		.then(response => {
			dispatch(getFilteredProductsSuccess(response.data));
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
