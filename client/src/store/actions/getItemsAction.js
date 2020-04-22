export const getItemsAction = () => {
	return dispatch => {
		fetch('../items.json')
			.then(res => {
				return res.json();
			})
			.then(data => {
				dispatch({
					type: 'GET_ITEMS',
					payload: [...data.items],
				});
			});
	};
};
