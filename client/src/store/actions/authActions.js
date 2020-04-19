export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';

const userLogin = user => ({
	type: LOGIN_USER,
	payload: user,
});

export const userLogout = () => ({
	type: LOGOUT_USER,
});

export const fetchUserRegister = data => async dispatch => {
	fetch('/customers', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(DataTransfer),
	})
		.then(res => res.json())
		.then(customer => {
			if (customer.enabled) {
				fetch('customers/login', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						loginOrEmail: data.login,
						password: data.password,
					}),
				})
					.then(loginResult => loginResult.json())
					.then(loginResult => {
						localStorage.setItem('token', loginResult.token);
						dispatch(userLogin(customer));
					});
			}
		})
		.catch(err => err);
};

