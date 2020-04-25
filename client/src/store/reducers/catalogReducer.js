import { GET_CATEGORIES, GET_COLORS } from '../types/catalogTypes';

const initialState = {
	categories: [],
  colors: [],
};

export const catalogReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_CATEGORIES:
			return {
				...state,
				categories: payload,
			};
		case GET_COLORS:
			return {
				...state,
				colors: payload,
			};
		default:
			return state;
	}
};
