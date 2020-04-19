import { LOGIN_USER, LOGOUT_USER } from '../actions/authActions';

const initialState = {
	currentUser: null,
	isLoading: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case LOGIN_USER:
			return { ...state, currentUser: payload };
		case LOGOUT_USER:
			return { ...state, currentUser: null };
		default:
			return state;
	}
};
