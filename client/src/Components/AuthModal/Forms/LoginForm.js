import React from 'react';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/InputFiels/InputField';
// import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { FormFields } from './styles';

const AuthForm = () => {
	return (
		<div>
			<Formik
				initialValues={{ email: '', password: '' }}
				validate={values => {
					const errors = {};
					if (!values.email) {
						errors.email = 'Required';
					} else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
					) {
						errors.email = 'Invalid email address';
					}
					return errors;
				}}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
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

						<Button text="login" type="submit" size="wide">
							Submit
						</Button>
					</form>
				)}
			</Formik>
		</div>
	);
};

export default AuthForm;
