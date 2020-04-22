import { GET_INFO_ITEMS } from '../actions/getInfoCarouselAction';

const initialItems = { items: [], error: null };

export const infoCarouselReducer = (
	state = initialItems,
	{ type, payload }
) => {
	switch (type) {
		case GET_INFO_ITEMS:
			return { ...state, items: payload };
		default:
			return state;
	}
};
