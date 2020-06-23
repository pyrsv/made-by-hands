import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../../UI/Button/Button';
import InputField from '../../../UI/InputFiels/InputField';
import FormErrorMessage from '../../../UI/FormErrorMessage/FormErrorMessage';
import { updatePassword } from '../../../../store/actions/authActions';
import { ErrorContainer, StyledForm, Description } from './styles';

const passwordSchema = Yup.object().shape({
	password: Yup.string()
		.required('Old password is required')
		.matches(/^[a-zA-Z0-9]+$/, {
			message: 'Allowed characters for password is a-z, A-Z, 0-9.',
		})
		.min(7, 'Password must be between 7 and 30 characters')
		.max(30, 'Password must be between 7 and 30 characters'),
	newPassword: Yup.string()
		.required('New password is required')
		.matches(/^[a-zA-Z0-9]+$/, {
			message: 'Allowed characters for password is a-z, A-Z, 0-9.',
		})
		.min(7, 'Password must be between 7 and 30 characters')
		.max(30, 'Password must be between 7 and 30 characters'),
});

const PasswordForm = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.auth.isPasswordLoading);
	const authError = Object.values(
		useSelector(state => state.auth.passwordError || {})
	)[0];
	return (
		<Formik
			validationSchema={passwordSchema}
			onSubmit={(values, { resetForm }) => {
				dispatch(updatePassword(values));
				resetForm();
			}}
			initialValues={{ password: '', newPassword: '' }}
		>
			{({
				values,
				handleChange,
				handleBlur,
				handleSubmit,
				errors,
				touched,
			}) => (
				<StyledForm onSubmit={handleSubmit}>
					<Description>Edit password</Description>
					<InputField
						type="password"
						name="password"
						label="Password"
						target="form"
						placeholder="XXXXXXX"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.password}
						error={errors.password}
						touched={touched.password}
					/>{' '}
					<InputField
						type="password"
						name="newPassword"
						label="New password"
						target="form"
						placeholder="example@mail.com"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.newPassword}
						error={errors.newPassword}
						touched={touched.newPassword}
					/>
					<Button
						onClick={handleSubmit}
						isLoading={isLoading}
						disabled={isLoading}
						type="submit"
						size="wide"
						text="Change password"
					/>
					{authError && typeof authError !== 'object' && (
						<ErrorContainer>
							<FormErrorMessage error={authError} />
						</ErrorContainer>
					)}
				</StyledForm>
			)}
		</Formik>
	);
};

export default PasswordForm;
