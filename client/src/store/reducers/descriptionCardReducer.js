import { GET_FIRST_ITEM } from '../types/descriptionCardType';

const initialItems = { card: {}, getItemsError: null };

export const descriptionCardReducer = (state = initialItems, action) => {
	switch (action.type) {
		case GET_FIRST_ITEM:
			return {
				...state,
				card: action.payload,
			};
		default: {
			return {
				...state,
			};
		}
	}
};
