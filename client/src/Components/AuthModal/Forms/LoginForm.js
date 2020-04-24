import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/InputFiels/InputField';
import { Formik } from 'formik';
import { FormFields } from './styles';
import { userLogin } from '../../../store/actions/authActions';

const AuthForm = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.auth.isLoading);

	return (
		<div>
			<Formik
				initialValues={{ loginOrEmail: '', password: '' }}
				onSubmit={values => {
					dispatch(userLogin(values));
				}}
			>
				{({ values, handleChange, handleBlur, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<FormFields>
							<InputField
								type="text"
								name="loginOrEmail"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.loginOrEmail}
								target="form"
								label="Login or Email"
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
								required
							/>
						</FormFields>

						<Button
							disabled={isLoading}
							text="login"
							type="submit"
							size="wide"
							onClick={() => {}}
						/>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default AuthForm;
