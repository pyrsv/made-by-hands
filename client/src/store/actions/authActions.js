import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import { handleUserLogin, handleGetUser } from '../../utils/API';
// eslint-disable-next-line import/no-cycle
import { setCartAction, updateCart } from './cartActions';
import { setWishlist } from './wishActions';

export const USER_LOGIN_INIT = 'USER_LOGIN_INIT';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

const userLoginInit = () => ({
	type: USER_LOGIN_INIT,
});

export const userLoginSuccess = user => ({
	type: USER_LOGIN_SUCCESS,
	payload: user,
});

export const userLoginError = error => ({
	type: USER_LOGIN_ERROR,
	payload: error,
});

export const userLogout = () => dispatch => {
	setAuthToken();
	if (!localStorage.getItem('cart')) {
		localStorage.setItem('cart', '[]');
	}
	dispatch(setCartAction([]));
	localStorage.setItem('cart', '[]');
	dispatch({ type: USER_LOGOUT });
};

export const getUser = () => dispatch => {
	const token = localStorage.getItem('token');

	if (token) {
		setAuthToken(token);
		handleGetUser(token)
			.then(customer => {
				axios.get('/cart').then(result => {
					if (!result.data) {
						axios.post('/cart');
					} else {
						dispatch(setCartAction(result.data.products));
					}
				});
				axios.get('/wishlist').then(result => {
					if (!result.data) {
						axios.post('/wishlist');
					} else {
						dispatch(setWishlist(result.data.products));
					}
				});
				dispatch(userLoginSuccess(customer.data));
			})
			.catch(err => {
				if (!localStorage.getItem('cart')) {
					localStorage.setItem('cart', '[]');
				}
				dispatch(setCartAction(JSON.parse(localStorage.getItem('cart'))));
				dispatch(userLoginError(err));
			});
	} else {
		if (!localStorage.getItem('cart')) {
			localStorage.setItem('cart', '[]');
		}
		dispatch(setCartAction(JSON.parse(localStorage.getItem('cart'))));
	}
};

export const userLogin = ({ loginOrEmail, password }) => dispatch => {
	dispatch(userLoginInit());
	handleUserLogin(loginOrEmail, password)
		.then(res => {
			const { token } = res.data;
			setAuthToken(token);
			handleGetUser()
				.then(customer => {
					axios.get('/cart').then(result => {
						if (!result.data) {
							axios.post('/cart');
						} else {
							dispatch(setCartAction(result.data.products));
						}
						dispatch(updateCart(result.data));
					});
					axios.get('/wishlist').then(result => {
						if (!result.data) {
							axios.post('/wishlist');
						} else {
							dispatch(setWishlist(result.data.products));
						}
					});

					dispatch(userLoginSuccess(customer.data));
				})
				.catch(err => {
					dispatch(userLoginError(err));
				});
		})
		.catch(err => {
			if (!localStorage.getItem('cart')) {
				localStorage.setItem('cart', '[]');
			}
			dispatch(setCartAction(JSON.parse(localStorage.getItem('cart'))));
			dispatch(userLoginError(err));
		});
};

export const userRegister = data => async dispatch => {
	dispatch(userLoginInit());
	axios
		.post('/customers', JSON.stringify(data), {
			headers: {
				'Content-Type': 'application/json',
			},
		})
		.then(customer => {
			const { login, password } = data;
			handleUserLogin(login, password)
				.then(res => {
					setAuthToken(res.data.token);
					axios.get('/cart').then(result => {
						if (!result.data) {
							axios.post('/cart');
						} else {
							dispatch(setCartAction(result.data.products));
						}
					});
					dispatch(userLoginSuccess(customer.data));
				})
				.catch(err => {
					dispatch(userLoginError(err));
				});
		})
		.catch(err => {
			if (!localStorage.getItem('cart')) {
				localStorage.setItem('cart', '[]');
			}
			dispatch(setCartAction(JSON.parse(localStorage.getItem('cart'))));
			dispatch(userLoginError(err));
		});
};
