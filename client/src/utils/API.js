import axios from 'axios';

export const handleUserLogin = async (loginOrEmail, password) => {
	const data = { loginOrEmail, password };
	return axios.post('/customers/login', JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const handleGetUser = async () => {
	return axios.get('customers/customer', {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
