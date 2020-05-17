import React from 'react';
import Button from '../../../../UI/Button/Button';
import TextareaField from '../../../../UI/TextareaFiels/TextareaFiels';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getRatingAndCommentsInfo } from '../../../../../store/actions/commentAction';

const FormToAddComment = ({ rating, id, toggleModal }) => {
	const dispatch = useDispatch();
	const postCommentAndRate = content => {
		axios
			.post('/comments', { product: id, content, rating })
			.then(() => dispatch(getRatingAndCommentsInfo(id)), toggleModal());
	};

	return (
		<div>
			<Formik
				initialValues={{ content: '' }}
				onSubmit={values => {
					postCommentAndRate(values.content);
				}}
			>
				{({ values, handleChange, handleBlur, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<TextareaField
							type="text"
							name="content"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.content}
							target="form"
							placeholder="Describe"
							required
						/>

						<Button text="send" type="submit" size="wide" />
					</form>
				)}
			</Formik>
		</div>
	);
};

FormToAddComment.propTypes = {
	id: PropTypes.string.isRequired,
	rating: PropTypes.number,
	toggleModal: PropTypes.func.isRequired,
};

FormToAddComment.defaultProps = {
	rating: 0,
};

export default FormToAddComment;