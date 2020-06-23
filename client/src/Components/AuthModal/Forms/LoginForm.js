import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/InputFiels/InputField';
import FormErrorMessage from '../../UI/FormErrorMessage/FormErrorMessage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FormFields, ErrorContainer, StyledForm } from './styles';
import { userLogin } from '../../../store/actions/authActions';

const LoginSchema = Yup.object().shape({
	loginOrEmail: Yup.string().required('Enter your login or email'),
	password: Yup.string()
		.min(7, 'Password should have at least 7 charachters')
		.required('Password is required'),
});

const AuthForm = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.auth.isLoading);
	const authError = Object.values(
		useSelector(state => state.auth.error || {})
	)[0];

	return (
		<div>
			<Formik
				initialValues={{ loginOrEmail: '', password: '' }}
				validationSchema={LoginSchema}
				onSubmit={values => {
					dispatch(userLogin(values));
				}}
			>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
					touched,
					errors,
				}) => (
					<StyledForm onSubmit={handleSubmit}>
						<FormFields>
							<InputField
								type="text"
								name="loginOrEmail"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.loginOrEmail}
								target="form"
								label="Login or Email"
								touched={touched.loginOrEmail}
								error={errors.loginOrEmail}
								helperText={errors.loginOrEmail}
								placeholder="example@mail.com"
								required
							/>
							<InputField
								type="password"
								name="password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
								target="form"
								label="Password"
								touched={touched.password}
								error={errors.password}
								helperText={errors.password}
								required
							/>
						</FormFields>

						<Button
							disabled={isLoading}
							text="login"
							type="submit"
							size="wide"
							onClick={() => {}}
							isLoading={isLoading}
						/>
						{authError && typeof authError !== 'object' && (
							<ErrorContainer>
								<FormErrorMessage error={authError} />
							</ErrorContainer>
						)}
					</StyledForm>
				)}
			</Formik>
		</div>
	);
};

export default AuthForm;
