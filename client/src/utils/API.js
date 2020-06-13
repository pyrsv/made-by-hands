import axios from 'axios';

export const handleUserLogin = async (loginOrEmail, password) => {
	const data = { loginOrEmail, password };
	return axios.post('/api/customers/login', JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const handleGetUser = async () => {
	return axios.get('/api/customers/customer', {
		headers: {
			'Content-Type': 'application/json',
		},
	});
};

export const checkProductsForCartAndFavorites = async products => {
	if (!Array.isArray(products)) {
		products = [products];
	}

	return axios
		.all([axios.get('/api/cart'), axios.get('/api/wishlist')])
		.then(
			axios.spread((...res) => {
				const cart = res[0].data.products;
				const wishlist = res[1].data.products;
				return {
					cart,
					wishlist,
				};
			})
		)
		.catch(() => {
			return {
				cart: JSON.parse(localStorage.getItem('cart') || '[]'),
				wishlist: JSON.parse(localStorage.getItem('wishlist') || '[]'),
			};
		})
		.then(({ cart, wishlist }) => {
			const productsWithCartAndFavorites = products.map(prod => {
				return {
					...prod,
					isInCart:
						cart.some(cartItem => cartItem.product._id === prod._id) || false,
					isFavorite: wishlist.some(Item => Item._id === prod._id) || false,
				};
			});
			return productsWithCartAndFavorites;
		});
};
