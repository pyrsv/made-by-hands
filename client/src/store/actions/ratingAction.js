import axios from 'axios';
import {
	SET_COMMENTS_AND_RATING,
	POST_NEW_RATING,
} from '../types/commentsType';

const setRatingAndCommentsInfo = data => ({
	type: SET_COMMENTS_AND_RATING,
	payload: data,
});

const postRating = data => ({
	type: POST_NEW_RATING,
	payload: data,
});

export const getRatingAndCommentsInfo = id => dispatch => {
	axios.get(`/api/comments/product/${id}`).then(res => {
		dispatch(setRatingAndCommentsInfo(res.data.reverse()));
	});
};

export const postNewRatingAndComments = (id, content, rating) => dispatch => {
	axios
		.post('/api/comments', { product: id, content, rating: rating || 5 })
		.then(res => {
			dispatch(postRating(res.data));
			dispatch(getRatingAndCommentsInfo(id));
		});
};
