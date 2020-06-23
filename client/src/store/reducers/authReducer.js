import {
	USER_LOGIN_ERROR,
	USER_LOGIN_INIT,
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_UPDATE_INIT,
	USER_UPDATE_ERROR,
	USER_UPDATE_SUCCESS,
	PASSWORD_UPDATE_ERROR,
	PASSWORD_UPDATE_INIT,
	PASSWORD_UPDATE_SUCCESS,
} from '../types/authTypes';

const initialState = {
	currentUser: null,
	isLoading: false,
	error: null,
	isPasswordLoading: false,
	passwordError: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case USER_LOGIN_INIT:
			return { ...state, isLoading: true, error: null };
		case USER_LOGIN_SUCCESS:
			return { ...state, currentUser: payload, error: null, isLoading: false };
		case USER_LOGIN_ERROR:
			return { ...state, error: payload, isLoading: false };
		case USER_UPDATE_INIT:
			return { ...state, isLoading: true };
		case USER_UPDATE_SUCCESS:
			return { ...state, currentUser: payload, error: null, isLoading: false };
		case USER_UPDATE_ERROR:
			return { ...state, error: payload, isLoading: false };
		case USER_LOGOUT:
			return { ...state, currentUser: null };
		case PASSWORD_UPDATE_INIT:
			return { ...state, isPasswordLoading: true, passwordError: null };
		case PASSWORD_UPDATE_SUCCESS:
			return {
				...state,
				isPasswordLoading: false,
				passwordError: null,
				currentUser: payload,
			};
		case PASSWORD_UPDATE_ERROR:
			return {
				...state,
				isPasswordLoading: false,
				passwordError: payload,
			};
		default:
			return state;
	}
};
