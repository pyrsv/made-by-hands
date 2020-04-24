const initialItems = { items: [], getItemsError: null };

export const itemsReducer = (state = initialItems, action) => {
	switch (action.type) {
		case 'GET_ITEMS_ERROR':
			return {
				...state,
				getItemsError: action.payload,
			};

		case 'GET_ITEMS_SUCCESS':
			return {
				...state,
				items: action.payload,
			};
		default: {
			return {
				...state,
			};
		}
	}
};
