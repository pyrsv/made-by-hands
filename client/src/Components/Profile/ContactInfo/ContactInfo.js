import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/InputFiels/InputField';
import {
	InfoWrapper,
	Description,
	Form,
	FormColumn,
	FieldsWrapper,
} from './styles';
import { updateUser } from '../../../store/actions/authActions';

const ContactInfo = () => {
	const dispatch = useDispatch();
	const { firstName, lastName, email, birthdate, address = {} } = useSelector(
		state => state.auth.currentUser
	);

	const { city, street, houseNumber, flat } = address;

	return (
		<InfoWrapper>
			<Description>Edit personal data</Description>
			<Formik
				enableReinitialize
				initialValues={{
					firstName,
					lastName,
					email,
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
				{({ values, handleChange, handleBlur, handleSubmit }) => (
					<Form>
						<FieldsWrapper>
							<FormColumn>
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
									name="birthdate"
									label="Birthdate"
									target="form"
									placeholder="YYYY.MM.DD"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.birthdate}
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
								/>
								<Button
									type="submit"
									onClick={handleSubmit}
									size="wide"
									text="Submit changes "
								/>
							</FormColumn>
						</FieldsWrapper>
					</Form>
				)}
			</Formik>
		</InfoWrapper>
	);
};

export default ContactInfo;
