const initialItems = {
	items: [],
	getFilteredItemsError: null,
	getItemsError: null,
	fItems: [],
};

export const itemsReducer = (state = initialItems, action) => {
	switch (action.type) {
		case 'GET_FILTERED_ITEMS_ERROR':
			return {
				...state,
				getFilteredItemsError: action.payload,
			};

		case 'GET_FILTERED_ITEMS_SUCCESS':
			return {
				...state,
				fItems: action.payload,
			};

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
