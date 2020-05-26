import axios from 'axios';
import { checkProductsForCartAndFavorites } from '../../../utils/API';
import { getFilteredProductsSuccess } from '../../../store/actions/catalogActions';
// import { useDispatch } from 'react-redux';

export const getSearchProduct = value => dispatch => {
	const searchPhrases = {
		query: value,
	};

	axios
		.post('/products/search', searchPhrases)
		.then(res => {
			const clients = [];
			// console.log(res.data);

			const result = res.data;
			result.map(el => {
				if (el.name.includes(value)) {
					clients.push(el);
					// console.log(el);
				}
				return clients;
			});

			checkProductsForCartAndFavorites(clients).then(
				productsWithCartAndFavorites => {
					// console.log(productsWithCartAndFavorites);
					dispatch(
						getFilteredProductsSuccess(
							productsWithCartAndFavorites,
							clients.productsQuantity
						)
					);
				}
			);
			// console.log(clients);
		})
		.catch(err => err, 'error request');
	// ------------------------------------------------------------------------------
	// axios
	// 	.get("/products")
	// 	// .get("/products/search", {'query':value})
	// 	.then(res => {

	// 		const clients = [];
	// 		// console.log(res);
	// 		res.data.map(el => {
	// 			if (el.name.includes(value)) {
	// 				clients.push(el);
	// 				// console.log(el);
	// 			}
	// 		});

	// checkProductsForCartAndFavorites(clients).then(
	// 	productsWithCartAndFavorites => {
	// 		console.log(productsWithCartAndFavorites);
	// 		dispatch(
	// 			getFilteredProductsSuccess(
	// 				productsWithCartAndFavorites,
	// 				clients.productsQuantity
	// 			)
	// 		);
	// 	}
	// );
	// 		console.log(clients);
	// 	})

	// 	.catch(err => err, 'error request');
};
