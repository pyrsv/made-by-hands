import React from 'react';
import Button from '../../../../UI/Button/Button';
import InputField from '../../../../UI/InputFiels/InputField';
import { Formik } from 'formik';

const FormToAddComment = () => {
	return (
		<div>
			<Formik initialValues={{ content: '' }}>
				{({ values, handleChange, handleBlur, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<InputField
							type="text"
							name="content"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.content}
							target="form"
							placeholder="Describe"
							required
						/>

						<Button text="send" type="submit" size="wide" onClick={() => {}} />
					</form>
				)}
			</Formik>
		</div>
	);
};

export default FormToAddComment;
