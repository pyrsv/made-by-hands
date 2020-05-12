import React from 'react';
import PropTypes from 'prop-types';
import RatingStars from '../../../UI/RatingStars/RatingStars';
import {
	InfoUserRating,
	CommentContainer,
	UserName,
	CommentContent,
} from './styles';

const Comment = ({ content, rating, firstName }) => {
	return (
		<CommentContainer>
			<InfoUserRating>
				<UserName>{firstName}</UserName>
				<RatingStars rating={rating} />
			</InfoUserRating>
			<CommentContent>{content}</CommentContent>
		</CommentContainer>
	);
};

Comment.propTypes = {
	content: PropTypes.string.isRequired,
	rating: PropTypes.number.isRequired,
	firstName: PropTypes.string.isRequired,
};

export default Comment;
