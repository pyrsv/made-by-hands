import axios from 'axios';

const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
const GET_ITEMS_ERROR = 'GET_ITEMS_ERROR';

const itemsSuccess = data => ({
	type: GET_ITEMS_SUCCESS,
	payload: data,
});

const itemsError = error => ({
	type: GET_ITEMS_ERROR,
	payload: error,
});

export const getItemsAction = () => dispatch => {
	axios
		.get('/products')
		.then(res => {
			dispatch(itemsSuccess([...res.data]));
		})
		.catch(err => dispatch(itemsError(err)));
};
