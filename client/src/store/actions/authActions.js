import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

export const USER_LOGIN_INIT = 'USER_LOGIN_INIT';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

const userLoginInit = () => ({
	type: USER_LOGIN_INIT,
});

const userLoginSuccess = user => ({
	type: USER_LOGIN_SUCCESS,
	payload: user,
});

const userLoginError = error => ({
	type: USER_LOGIN_ERROR,
	payload: error,
});

export const userLogout = () => dispatch => {
	setAuthToken();
	dispatch({ type: USER_LOGOUT });
};

export const userLogin = customer => dispatch => {

	const data = {
		loginOrEmail: customer.loginOrEmail || customer.login,
		password: customer.password,
	};
	axios
		.post('/customers/login', JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(loginResult => {
			setAuthToken(loginResult.token);
			dispatch(userLoginSuccess(customer));
		});
};

export const userRegister = data => async dispatch => {
	axios
		.post('/customers', JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(customer => {
			console.log('customer', customer);
			dispatch(userLogin);
		})
		.catch(err => {
			console.log('err.response.data', err.response.data);
			dispatch(userLoginError(err));
		});
};
