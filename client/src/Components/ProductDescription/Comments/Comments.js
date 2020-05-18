import React, { useEffect, useState } from 'react';
import Comment from './Comment/Comment';
import { useSelector, useDispatch } from 'react-redux';
import { getRatingAndCommentsInfo } from '../../../store/actions/commentAction';
import PropTypes from 'prop-types';
import { CommentTitle } from './styles';
import Pagination from '../../UI/Pagination/Pagination';

const Comments = ({ id }) => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);
	const [commentsPerPage] = useState(3);

	useEffect(() => {
		dispatch(getRatingAndCommentsInfo(id));
	}, [id]);
	let arrayOfComments = useSelector(state => state.comments.comments);
	arrayOfComments = arrayOfComments && arrayOfComments.reverse();

	const indexOfLastComment = currentPage * commentsPerPage;
	const indexOfFirstComment = indexOfLastComment - commentsPerPage;
	const currentComments =
		arrayOfComments &&
		arrayOfComments.slice(indexOfFirstComment, indexOfLastComment);

	const paginate = pageNumber => setCurrentPage(pageNumber);

	return (
		<div>
			{!currentComments ? (
				<div />
			) : (
				<>
					{currentComments.length > 0 && (
						<CommentTitle>Comments: </CommentTitle>
					)}
					{currentComments.map(comment => (
						<Comment
							key={comment._id}
							content={comment.content}
							rating={comment.rating}
							firstName={comment.customer.firstName}
						/>
					))}
					<Pagination
						currentPage={currentPage}
						itemsPerPage={commentsPerPage}
						totalItemsCount={arrayOfComments && arrayOfComments.length}
						paginate={paginate}
					/>
				</>
			)}
		</div>
	);
};

Comments.propTypes = {
	id: PropTypes.number.isRequired,
};

export default Comments;
