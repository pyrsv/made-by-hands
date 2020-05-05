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

export const checkProductsForCartAndFavorites = products => {
	if (!Array.isArray(products)) {
		products = [products];
	}

	return axios
		.get('/cart')
		.then(res => res.data.products)
		.catch(() => JSON.parse(localStorage.getItem('cart') || '[]'))
		.then(cart => {
			return axios
				.get('/wishlist')
				.then(res => res.data.products)
				.catch(() => JSON.parse(localStorage.getItem('wishlist') || '[]'))
				.then(wishlist => {
					const productsWithCartAndFavorites = products.map(prod => {
						return {
							...prod,
							isInCart:
								cart.some(cartItem => cartItem.product._id === prod._id) ||
								false,
							isFavorite:
								wishlist.some(cartItem => cartItem.product._id === prod._id) ||
								false,
						};
					});
					return productsWithCartAndFavorites;
				});
		});
};
