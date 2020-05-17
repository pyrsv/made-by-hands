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

		case 'SET_PRODUCT_TO_CART':
			return {
				...state,
				items: state.items.map(prod => {
					return prod._id === action.payload
						? { ...prod, isInCart: !prod.isInCart }
						: prod;
				}),
			};

		case 'SET_PRODUCT_TO_WISHLIST':
			return {
				...state,
				items: state.items.map(prod => {
					return prod._id === action.payload
						? { ...prod, isFavorite: !prod.isFavorite }
						: prod;
				}),
				currentProductId: null,
			};
		default: {
			return {
				...state,
			};
		}
	}
};
