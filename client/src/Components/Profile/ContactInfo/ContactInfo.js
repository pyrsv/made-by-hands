import React from 'react';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/InputFiels/InputField';
import { InfoWrapper, Description, Form } from './styles';

const ContactInfo = () => {
	// const dispatch = useDispatch();
	const { firstName, lastName, email, birthdayDate } = useSelector(
		state => state.auth.currentUser
	);

	return (
		<InfoWrapper>
			<Description>Edit personal data</Description>
			<Formik
				enableReinitialize
				initialValues={{
					firstName,
					lastName,
					email,
					birthdayDate: birthdayDate || '',
				}}
				onSubmit={values => values}
			>
				{({ values, handleChange, handleBlur, handleSubmit }) => (
					<Form>
						<InputField
							type="email"
							name="email"
							label="Email"
							target="form"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						<InputField
							type="text"
							name="firstName"
							label="First Name"
							target="form"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.firstName}
						/>
						<InputField
							type="text"
							name="lastName"
							label="Last Name"
							target="form"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.lastName}
						/>
						<InputField
							type="text"
							name="birthdayDate"
							label="Birhday date"
							target="form"
							placeholder="YYYY.MM.DD"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.birthdayDate}
						/>
						<Button
							type="submit"
							onClick={handleSubmit}
							size="wide"
							text="Submit changes "
						/>
					</Form>
				)}
			</Formik>
		</InfoWrapper>
	);
};

export default ContactInfo;
