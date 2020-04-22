import axios from 'axios';

export const getItemsAction = () => {
	return dispatch => {
		axios
			.get('/products')
			.then(res => {
				dispatch({
					type: 'GET_ITEMS',
					payload: [...res.data],
				});
			})
			.catch
			// err => console.log(err.response.data)
			();
	};
};
