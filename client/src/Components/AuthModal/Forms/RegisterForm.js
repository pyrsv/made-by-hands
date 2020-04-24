import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/InputFiels/InputField';
import { FormFields } from './styles';
import { userRegister } from '../../../store/actions/authActions';

const RegisterForm = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(state => state.auth.isLoading);

	return (
		<div>
			<Formik
				initialValues={{
					email: '',
					login: '',
					password: '',
					firstName: '',
					lastName: '',
					phone: '',
				}}
				onSubmit={values => {
					dispatch(userRegister(values));
				}}
			>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
					/* and other goodies */
				}) => (
					<form onSubmit={handleSubmit}>
						<FormFields>
							<InputField
								type="text"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								target="form"
								label="Email"
								required
							/>
							<InputField
								type="text"
								name="login"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.login}
								target="form"
								label="Login"
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
							<InputField
								type="text"
								name="firstName"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.firstName}
								target="form"
								label="First Name"
								required
							/>
							<InputField
								type="text"
								name="lastName"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.lastName}
								target="form"
								label="Last name"
								required
							/>
							<InputField
								type="text"
								name="phone"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.phone}
								target="form"
								label="Phone number"
								required
							/>
						</FormFields>

						<Button
							disabled={isLoading}
							text="Register"
							type="submit"
							size="wide"
						/>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default RegisterForm;
