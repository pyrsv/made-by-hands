import axios from 'axios';
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

const getCategoriesInit = () => ({
	type: GET_CATEGORIES_INIT,
});

const getColorsInit = () => ({
	type: GET_COLORS_INIT,
});

const getBrandsInit = () => ({
	type: GET_BRANDS_INIT,
});

const getCategoriesSuccess = categories => ({
	type: GET_CATEGORIES_SUCCESS,
	payload: categories,
});

const getColorsSuccess = colors => ({
	type: GET_COLORS_SUCCESS,
	payload: colors,
});

const getBrandsSuccess = brands => ({
	type: GET_BRANDS_SUCCESS,
	payload: brands,
});

const getCategoriesFail = err => ({
	type: GET_CATEGORIES_FAIL,
	payload: err,
});

const getColorsFail = err => ({
	type: GET_COLORS_FAIL,
	payload: err,
});

const getBrandsFail = err => ({
	type: GET_BRANDS_FAIL,
	payload: err,
});

const getPriceRangeInit = () => ({
	type: GET_PRICE_RANGE_INIT,
});

const getPriceRangeSuccess = pricerange => ({
	type: GET_PRICE_RANGE_SUCCESS,
	payload: pricerange,
});

const getPriceRangeError = () => ({
	type: GET_PRICE_RANGE_ERROR,
});

export const getCategories = () => dispatch => {
	dispatch(getCategoriesInit());
	axios
		.get('/api/catalog')
		.then(response => {
			dispatch(getCategoriesSuccess(response.data));
		})
		.catch(err => {
			dispatch(getCategoriesFail(err.response));
		});
};

export const getColors = () => dispatch => {
	dispatch(getColorsInit());
	axios
		.get('/api/colors')
		.then(response => {
			dispatch(getColorsSuccess(response.data));
		})
		.catch(err => {
			dispatch(getColorsFail(err.response));
		});
};

export const getBrands = () => dispatch => {
	dispatch(getBrandsInit());
	axios
		.get('/api/filters/brand')
		.then(response => {
			dispatch(getBrandsSuccess(response.data));
		})
		.catch(err => {
			dispatch(getBrandsFail(err.response));
		});
};

export const getPriceRange = () => dispatch => {
	dispatch(getPriceRangeInit());
	axios
		.get('/api/products/pricerange')
		.then(response => {
			dispatch(getPriceRangeSuccess(response.data));
		})
		.catch(err => {
			dispatch(getPriceRangeError(err.response));
		});
};
