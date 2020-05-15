import axios from 'axios';

export const getUsers = () => {
	axios
		.get('/products')
		.then(res => {
			const clients = res.data.map(el => {
				if (el.name.includes('nixo')) {
					return el.name;
				}
				return clients;
			});
		})

		.catch(err => err, 'error request');
};

getUsers();
