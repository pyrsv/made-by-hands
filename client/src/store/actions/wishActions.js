import axios from 'axios';

export const SET_WISHLIST = 'SET_WISHLIST';

export const setWishlist = array => {
	return {
		type: SET_WISHLIST,
		payload: array,
	};
};

export const addToWishlist = id => dispatch => {
	axios.put(`/api/wishlist/${id}`).then(result => {
		dispatch(setWishlist(result.data.products));
		// console.log(result.data.products)
	});
};
export const deleteFromWishlist = id => dispatch => {
	axios.delete(`/api/wishlist/${id}`).then(result => {
		dispatch(setWishlist(result.data.products));

		// console.log(result.data.products)
	});
};
