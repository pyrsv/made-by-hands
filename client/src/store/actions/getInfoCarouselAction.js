import axios from 'axios';

export const GET_INFO_ITEMS = 'GET_INFO_ITEMS';

const getItems = data => ({
	type: GET_INFO_ITEMS,
	payload: data,
});

export const getInfoCarouselAction = () => dispatch => {
	axios.get('../infoItems.json').then(data => {
		dispatch(getItems(data.data.infoItems));
	});
};
