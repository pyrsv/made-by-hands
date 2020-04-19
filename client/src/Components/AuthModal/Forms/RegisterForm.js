import React from 'react';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/InputFiels/InputField';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FormFields } from './styles';

const RegisterForm = ({ onSubmit }) => {
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
				onSubmit={(values, { setSubmitting }) => {
					console.log('form submitted');
					onSubmit(values);
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

						<Button text="Register" type="submit" size="wide" />
					</form>
				)}
			</Formik>
		</div>
	);
};

RegisterForm.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default RegisterForm;
