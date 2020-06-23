import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '../../UI/Button/Button';
import RadioButton from '../../UI/RadioButton/RadioButton';
import InputField from '../../UI/InputFiels/InputField';
import PropTypes from 'prop-types';
import {
	FormColumn,
	StyledForm,
	DeliveryOptions,
	DeliveryItem,
	DeliveryItemRadioButton,
	StyledSelect,
	CheckoutSubheading,
} from './styles';

const CheckoutForm = ({
	user,
	isAddressDelivery,
	showPostal,
	showAddress,
	onFormSubmit,
}) => {
	const checkoutSchema = Yup.object().shape({
		firstName: Yup.string()
			.matches(/^[a-zA-Zа-яА-Я]+$/, {
				message: 'Allowed characters is a-z, A-Z, а-я, А-Я.',
			})
			.min(2, 'First name must be between 2 and 25 characters')
			.required('First name is required'),
		lastName: Yup.string()
			.matches(/^[a-zA-Zа-яА-Я]+$/, {
				message: 'Allowed characters is a-z, A-Z, а-я, А-Я.',
			})
			.min(2, 'Last Name must be between 2 and 25 characters')
			.required('Last name is required'),
		email: Yup.string()
			.email('Enter valid email')
			.required('Email is requiered'),
		telephone: Yup.string()
			.matches(/^\+380\d{3}\d{2}\d{2}\d{2}$/, {
				message: 'Enter phone number in format +380XXXXXXXXX',
			})
			.required('Phone is required'),
		delivery: isAddressDelivery
			? Yup.object().shape({
					city: Yup.string().required('City is required'),
					house: Yup.string().required('House number is required'),
					app: Yup.string().required('Flat is required'),
					street: Yup.string().required('Street is required'),
			  })
			: Yup.object().shape({
					deliveryCity: Yup.string().required(),
					deliveryPoint: Yup.string().required(),
			  }),
	});

	return (
		<Formik
			enableReinitialize
			initialValues={{
				firstName: user.firstName || '',
				lastName: user.lastName || '',
				email: user.email || '',
				telephone: user.telephone || '',
				delivery: {
					deliveryPoint: '2',
					deliveryCity: 'Kyiv',
					city: user?.address.city || '',
					house: user?.address.houseNumber || '',
					app: user?.address.flat || '',
					street: user?.address.street || '',
				},
			}}
			onSubmit={onFormSubmit}
			validationSchema={checkoutSchema}
		>
			{({
				errors,
				touched,
				values,
				handleBlur,
				handleChange,
				handleSubmit,
			}) => {
				return (
					<StyledForm onSubmit={handleSubmit}>
						<FormColumn>
							<CheckoutSubheading>Enter your details</CheckoutSubheading>
							<InputField
								name="firstName"
								onChange={handleChange}
								onBlur={handleBlur}
								target="form"
								type="text"
								label="First Name"
								value={values.firstName}
								touched={touched.firstName}
								error={errors.firstName}
								helperText={errors.firstName}
							/>
							<InputField
								name="lastName"
								onChange={handleChange}
								onBlur={handleBlur}
								target="form"
								type="text"
								label="Last Name"
								value={values.lastName}
								touched={touched.lastName}
								error={errors.lastName}
								helperText={errors.lastName}
							/>
							<InputField
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								target="form"
								type="text"
								label="Email"
								value={values.email}
								touched={touched.email}
								error={errors.email}
								helperText={errors.email}
							/>
							<InputField
								name="telephone"
								onChange={handleChange}
								onBlur={handleBlur}
								target="form"
								type="text"
								label="Phone number"
								value={values.telephone}
								touched={touched.telephone}
								error={errors.telephone}
								helperText={errors.telephone}
							/>
						</FormColumn>

						<FormColumn>
							<DeliveryOptions>
								<CheckoutSubheading>Choose delivery option</CheckoutSubheading>

								<DeliveryItem>
									<DeliveryItemRadioButton>
										<RadioButton
											id="postalCheck"
											value="postal"
											onChange={showPostal}
											isSelected={!isAddressDelivery}
											label="Postal delivery"
										/>
									</DeliveryItemRadioButton>
									{!isAddressDelivery && (
										<>
											<StyledSelect
												as="select"
												name="delivery.postalCity"
												value={values.delivery.deliveryCity}
												onChange={handleChange}
												onBlur={handleBlur}
												type="select"
											>
												<option value="Kyiv"> Kyiv</option>
												<option value="Lviv"> Lviv</option>
												<option value="Odessa"> Odessa</option>
											</StyledSelect>
											<StyledSelect
												as="select"
												name="delivery.deliveryPoint"
												value={values.delivery.deliveryPoint}
												onChange={handleChange}
												onBlur={handleBlur}
												type="select"
											>
												<option value="1"> Point 1</option>
												<option value="2"> Point 2</option>
												<option value="3"> Point 3</option>
											</StyledSelect>
										</>
									)}
								</DeliveryItem>

								<DeliveryItem>
									<DeliveryItemRadioButton>
										<RadioButton
											id="addressCheck"
											value="address"
											onChange={showAddress}
											isSelected={isAddressDelivery}
											label="Сouier delivery"
										/>
									</DeliveryItemRadioButton>
									{isAddressDelivery && (
										<div>
											<InputField
												name="delivery.city"
												onChange={handleChange}
												onBlur={handleBlur}
												target="form"
												type="text"
												label="City"
												value={values.delivery.city}
												touched={touched.delivery?.city}
												error={errors.delivery?.city}
											/>
											<InputField
												name="delivery.street"
												onChange={handleChange}
												onBlur={handleBlur}
												target="form"
												type="text"
												label="Street"
												value={values.delivery.street}
												touched={touched.delivery?.street}
												error={errors.delivery?.street}
											/>
											<InputField
												name="delivery.house"
												onChange={handleChange}
												onBlur={handleBlur}
												target="form"
												type="text"
												label="House number"
												value={values.delivery.house}
												touched={touched.delivery?.house}
												error={errors.delivery?.house}
											/>

											<InputField
												name="delivery.app"
												onChange={handleChange}
												onBlur={handleBlur}
												target="form"
												type="text"
												label="Flat number"
												value={values.delivery.app}
												touched={touched.delivery?.app}
												error={errors.delivery?.app}
											/>
										</div>
									)}
								</DeliveryItem>
							</DeliveryOptions>
							<Button
								onClick={() => {}}
								type="submit"
								text="checkout"
								color="dark"
								size="wide"
							/>
						</FormColumn>
					</StyledForm>
				);
			}}
		</Formik>
	);
};

CheckoutForm.propTypes = {
	user: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.object])
	).isRequired,
	isAddressDelivery: PropTypes.bool.isRequired,
	showPostal: PropTypes.func.isRequired,
	showAddress: PropTypes.func.isRequired,
	onFormSubmit: PropTypes.func.isRequired,
};

export default CheckoutForm;
