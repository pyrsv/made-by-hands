import { SET_COMMENTS } from '../types/commentsType';

const initialState = { comments: null };

export const commentsReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_COMMENTS:
			return { ...state, comments: payload };
		default:
			return state;
	}
};
