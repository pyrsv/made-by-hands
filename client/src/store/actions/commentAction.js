import axios from 'axios';
import { SET_COMMENTS } from '../types/commentsType';

const setRatingAndCommentsInfo = data => ({
	type: SET_COMMENTS,
	payload: data,
});

export const getRatingAndCommentsInfo = id => dispatch => {
	axios.get(`/api/comments/product/${id}`).then(res => {
		dispatch(setRatingAndCommentsInfo(res.data));
	});
};
