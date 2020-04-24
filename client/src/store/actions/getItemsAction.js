import axios from 'axios';

const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';
const GET_FILTERED_ITEMS_SUCCESS = 'GET_FILTERED_ITEMS_SUCCESS';
const GET_FILTERED_ITEMS_ERROR = 'GET_FILTERED_ITEMS_ERROR';

const itemsSuccess = data => ({
	type: GET_ITEMS_SUCCESS,
	payload: data,
});

const itemsError = error => ({
	type: GET_ITEMS_ERROR,
	payload: error,
});

const filteredItemsSuccess = data => ({
	type: GET_FILTERED_ITEMS_SUCCESS,
	payload: data,
});

const filteredItemsError = error => ({
	type: GET_FILTERED_ITEMS_ERROR,
	payload: error,
});

export const getItemsAction = () => dispatch => {
	axios
		.get('/products')
		.then(res => {
			dispatch(itemsSuccess(res.data));
		})
		.catch(err => dispatch(itemsError(err)));
};

export const getFilteredItemsAction = () => dispatch => {
	axios
		.get('/products/filter', {
			params: {
				color: 'black',
			},
		})
		.then(res => {
			// console.log(res.data);
			dispatch(filteredItemsSuccess(res.data));
		})
		.catch(err => dispatch(filteredItemsError(err)));
};
