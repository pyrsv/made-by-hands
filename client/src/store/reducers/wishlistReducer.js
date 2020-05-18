import { SET_WISHLIST } from '../actions/wishActions';

const initialState = { wishlist: [] };

export const wishlistReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_WISHLIST: {
			return { ...state, wishlist: payload };
		}

		default: {
			return state;
		}
	}
};
