import axios from 'axios';

export const GET_INFO_ITEMS = 'GET_INFO_ITEMS';

const getItems = data => ({
	type: GET_INFO_ITEMS,
	payload: data,
});

export const getInfoCarouselAction = () => dispatch => {
	axios.get('/slides').then(res => {
		dispatch(getItems(res.data));
	});
};
