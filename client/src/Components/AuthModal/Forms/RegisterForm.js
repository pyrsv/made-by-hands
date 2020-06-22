import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/InputFiels/InputField';
import { FormFields } from './styles';
import { userRegister } from '../../../store/actions/authActions';

const RegisterSchema = Yup.object().shape({
	email: Yup.string().required('Email is required').email('Enter valid email'),
	login: Yup.string()
		.required('Login is required')
		.min(3, 'Login must be between 3 and 10 characters')
		.max(10, 'Login must be between 3 and 10 characters'),
	password: Yup.string()
		.matches(/^[a-zA-Z0-9]+$/, {
			message: 'Allowed characters for password is a-z, A-Z, 0-9.',
		})
		.min(7, 'Password must be between 7 and 30 characters')
		.max(30, 'Password must be between 7 and 30 characters')
		.required('Password is required'),
	firstName: Yup.string()
		.required('First name is required')
		.matches(/^[a-zA-Zа-яА-Я]+$/, {
			message: 'Allowed characters for is a-z, A-Z, а-я, А-Я.',
		})
		.min(2, 'Last Name must be between 2 and 25 characters')
		.max(25, 'Last Name must be between 2 and 25 characters'),
	lastName: Yup.string()
		.required('First name is required')
		.matches(/^[a-zA-Zа-яА-Я]+$/, {
			message: 'Allowed characters for is a-z, A-Z, а-я, А-Я.',
		})
		.min(2, 'Last Name must be between 2 and 25 characters')
		.max(25, 'Last Name must be between 2 and 25 characters'),
	telephone: Yup.string()
		.required('Phone number is required')
		.matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, {
			message: 'Enter phone in format +380XXXXXXXXX',
		}),
});

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
					telephone: '',
				}}
				validationSchema={RegisterSchema}
				onSubmit={values => {
					dispatch(userRegister(values));
				}}
			>
				{({
					values,
					handleChange,
					handleBlur,
					handleSubmit,
					errors,
					touched,
				}) => (
					<form onSubmit={handleSubmit}>
						<FormFields>
							<InputField
								type="text"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
								error={errors.email}
								touched={touched.email}
								placeholder="example@mail.com"
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
								error={errors.login}
								touched={touched.login}
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
								error={errors.password}
								touched={touched.password}
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
								error={errors.firstName}
								touched={touched.firstName}
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
								error={errors.lastName}
								touched={touched.lastName}
								target="form"
								label="Last name"
								required
							/>
							<InputField
								type="text"
								name="telephone"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.telephone}
								error={errors.telephone}
								touched={touched.telephone}
								placeholder="+380XXXXXXXXXXX"
								target="form"
								label="Phone number"
								required
							/>
						</FormFields>

						<Button
							disabled={isLoading}
							isLoading={isLoading}
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
