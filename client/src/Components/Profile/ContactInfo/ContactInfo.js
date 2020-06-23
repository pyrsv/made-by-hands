import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../UI/Button/Button';
import FormErrorMessage from '../../UI/FormErrorMessage/FormErrorMessage';
import InputField from '../../UI/InputFiels/InputField';
import PasswordForm from './PasswordForm/PasswordForm';
import {
	InfoWrapper,
	Description,
	Form,
	FormColumn,
	FieldsWrapper,
	ErrorContainer,
	FormsGridConrainer,
} from './styles';
import {
	updateUser,
	userLoginError,
	updatePasswordError,
} from '../../../store/actions/authActions';

const ContactInfoSchema = Yup.object().shape({
	firstName: Yup.string()
		.matches(/^[a-zA-Zа-яА-Я]+$/, {
			message: 'Allowed characters is a-z, A-Z, а-я, А-Я.',
		})
		.min(2, 'Last Name must be between 2 and 25 characters'),
	lastName: Yup.string()
		.matches(/^[a-zA-Zа-яА-Я]+$/, {
			message: 'Allowed characters is a-z, A-Z, а-я, А-Я.',
		})
		.min(2, 'Last Name must be between 2 and 25 characters'),
	email: Yup.string().email('Enter valid email'),
	birthdate: Yup.date('Enter date in format YYYY.MM.DD'),
	telephone: Yup.string().matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, {
		message: 'Enter phone number in format +380XXXXXXXXX',
	}),
	address: Yup.object().shape({
		city: Yup.string().matches(/^[a-zA-Zа-яА-Я]+$/, {
			message: 'Allowed characters is a-z, A-Z, а-я, А-Я.',
		}),
		street: Yup.string().matches(/^[a-zA-Zа-яА-Я]+$/, {
			message: 'Allowed characters is a-z, A-Z, а-я, А-Я.',
		}),
		houseNumber: Yup.string(),
		flat: Yup.string(),
	}),
});

const ContactInfo = () => {
	const dispatch = useDispatch();
	const {
		firstName,
		lastName,
		email,
		birthdate,
		telephone,
		address = {},
	} = useSelector(state => state.auth.currentUser);
	useEffect(() => {
		return () => {
			dispatch(userLoginError(null));
			dispatch(updatePasswordError(null));
		};
	}, [dispatch]);
	const isLoading = useSelector(state => state.auth.isLoading);
	const authError = Object.values(
		useSelector(state => state.auth.error || {})
	)[0];

	const { city, street, houseNumber, flat } = address;

	return (
		<InfoWrapper>
			<FormsGridConrainer>
				<Formik
					enableReinitialize
					validationSchema={ContactInfoSchema}
					initialValues={{
						firstName,
						lastName,
						email,
						telephone,
						birthdate: birthdate || '',
						address: {
							city: city || '',
							street: street || '',
							houseNumber: houseNumber || '',
							flat: flat || '',
						},
					}}
					onSubmit={values => dispatch(updateUser(values))}
				>
					{({
						values,
						handleChange,
						handleBlur,
						handleSubmit,
						errors,
						touched,
					}) => (
						<Form>
							<Description>Edit personal data</Description>

							<FieldsWrapper>
								<FormColumn>
									<InputField
										type="email"
										name="email"
										label="Email"
										target="form"
										placeholder="example@mail.com"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.email}
										error={errors.email}
										touched={touched.email}
									/>
									<InputField
										type="text"
										name="firstName"
										label="First Name"
										target="form"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.firstName}
										error={errors.firstName}
										touched={touched.firstName}
									/>
									<InputField
										type="text"
										name="lastName"
										label="Last Name"
										target="form"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.lastName}
										error={errors.lastName}
										touched={touched.lastName}
									/>
									<InputField
										type="text"
										name="birthdate"
										label="Birthdate"
										target="form"
										placeholder="YYYY.MM.DD"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.birthdate}
										error={errors.birthdate}
										touched={touched.birthdate}
									/>
									<InputField
										type="text"
										name="telephone"
										label="Phone number"
										target="form"
										placeholder="+380XXXXXXXXX"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.telephone}
										error={errors.telephone}
										touched={touched.telephone}
									/>
								</FormColumn>
								<FormColumn>
									<InputField
										type="text"
										name="address.city"
										label="City"
										target="form"
										placeholder="Kyiv"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.address.city}
										error={errors.address?.city}
										touched={touched.address?.city}
									/>
									<InputField
										type="text"
										name="address.street"
										label="Street"
										target="form"
										placeholder="Kreshchatik"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.address.street}
										error={errors.address?.street}
										touched={touched.address?.street}
									/>
									<InputField
										type="text"
										name="address.houseNumber"
										label="House number"
										target="form"
										placeholder="69"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.address.houseNumber}
										error={errors.address?.houseNumber}
										touched={touched.address?.houseNumber}
									/>
									<InputField
										type="text"
										name="address.flat"
										label="Flat"
										target="form"
										placeholder="420"
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.address.flat}
										error={errors.address?.flat}
										touched={touched.address?.flat}
									/>
								</FormColumn>
							</FieldsWrapper>

							<Button
								onClick={handleSubmit}
								isLoading={isLoading}
								disabled={isLoading}
								type="submit"
								size="wide"
								text="Submit changes "
							/>
							{authError && typeof authError !== 'object' && (
								<ErrorContainer>
									<FormErrorMessage error={authError} />
								</ErrorContainer>
							)}
						</Form>
					)}
				</Formik>
				<PasswordForm />
			</FormsGridConrainer>
		</InfoWrapper>
	);
};

export default ContactInfo;
