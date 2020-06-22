import {
	SET_COMMENTS_AND_RATING,
	POST_NEW_RATING,
} from '../types/commentsType';

const initialState = { comments: [] };

export const ratingReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_COMMENTS_AND_RATING:
			return { ...state, comments: payload };
		case POST_NEW_RATING:
			return { ...state, comments: [...state.comments, payload] };
		default:
			return state;
	}
};
