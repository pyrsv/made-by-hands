import axios from 'axios';
import { GET_FIRST_ITEM } from '../types/descriptionCardType';

const takeCard = data => ({
	type: GET_FIRST_ITEM,
	payload: data,
});

export const getCart = cartNoParam => dispatch => {
	axios.get(`/products/${cartNoParam}`).then(res => {
		dispatch(takeCard(res.data));
	});
};
