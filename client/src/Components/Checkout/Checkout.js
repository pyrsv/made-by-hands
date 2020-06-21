import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
// import * as yup from 'yup';
import { string, number } from 'yup';
import Title from '../UI/Title/title';
import Button from '../UI/Button/Button';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import CheckoutSumbit from './CheckoutSubmit/CheckoutSubmit';
import InputField from '../UI/InputFiels/InputField';
import {} from './styles';

const valid = {
	firstName: string().required(),
	lastName: string().required(),
	phone: number().required().positive().integer(),
	email: string().email(),
};

const Checkout = () => {
	const [isAddressDelivery, setAddressDelivery] = useState(false);
	const [isCheckoutSuccess, setCheckoutSuccess] = useState(false);
	const [orderNo, setOrderNo] = useState(null);
	const user = useSelector(state => state.auth.currentUser) || {};
	const products = useSelector(state => state.cartReducer.currentCart) || {};

	if (user && !user.address) {
		user.address = {};
	}

	const handleFormSubmit = values => {
		let checkoutData;
		if (!user._id) {
			checkoutData = {
				products: JSON.stringify(products),
				firstName: values.firstName,
				lastName: values.lastName,
			};
		} else {
			checkoutData = {
				customerId: user._id,
			};
		}
		checkoutData.mobile = values.telephone;
		checkoutData.email = values.email;
		checkoutData.postalDelivery = !isAddressDelivery
			? {
					city: values.deliveryCity,
					postalOffice: values.deliveryPoint,
			  }
			: null;
		checkoutData.deliveryAddress = isAddressDelivery
			? JSON.stringify({
					country: 'Ukraine',
					city: values.city,
					address: `${values.street} ${values.house}, fl.${values.app}`,
			  })
			: null;
		checkoutData.letterSubject = 'Thank you for order!';
		checkoutData.status = 'Pending';
		checkoutData.letterHtml =
			'<h1>Your order is placed. OrderNo is 023689452.</h1>';
		axios
			.post('/api/orders', checkoutData)
			.then(res => {
				setOrderNo(res.data.order.orderNo);
				setCheckoutSuccess(true);
			})
			.catch(err => err);
	};

	const showPostalPoints = errors => {
		setAddressDelivery(false);
		errors.city = '';
		errors.street = '';
		errors.house = '';
		errors.app = '';
		delete valid.city;
		delete valid.street;
		delete valid.house;
	};
	const showAddress = values => {
		setAddressDelivery(true);
		valid.city = string().required();
		valid.street = string().required();
		valid.house = string().required();
		valid.app = number().required();
		values.delivery = '';
	};
	return (
		<LayoutContainer>
			{isCheckoutSuccess ? (
				<CheckoutSumbit orderNo={orderNo} />
			) : (
				<>
					<Title text="checkout" color="dark" />
					<Formik
						enableReinitialize
						initialValues={{
							firstName: user.firstName || '',
							lastName: user.lastName || '',
							email: user.email || '',
							telephone: user.telephone || '',
							deliveryPoint: 'point1',
							deliveryCity: 'Kyiv',
							city: user?.address.city || '',
							house: user?.address.houseNumber || '',
							app: user?.address.flat || '',
							street: user?.address.street || '',
						}}
						// isInitialValid={false}
						// validate={values => {
						// 	const errors = {};
						// 	if (valid.city) {
						// 		if (!values.city || !isNaN(+values.street)) {
						// 			errors.city = 'city is required as a string';
						// 		}
						// 		if (!values.street || !isNaN(+values.street)) {
						// 			errors.street = 'Street is required as a string';
						// 		}
						// 		if (!values.house) {
						// 			errors.house = 'house is required';
						// 		}
						// 		if (!values.app || isNaN(+values.app)) {
						// 			errors.app = 'app is required as a number';
						// 		}
						// 	}
						// 	return errors;
						// }}
						// validationSchema={yup.object().shape(valid)}
						onSubmit={handleFormSubmit}
					>
						{({
							errors,
							touched,
							values,
							handleBlur,
							handleChange,
							handleSubmit,
						}) => (
							<form onSubmit={handleSubmit}>
								<p>Fill the fields</p>
								<div>
									<div>
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
									</div>

									<div>
										<div>
											<input
												checked={!isAddressDelivery}
												value="postal"
												type="radio"
												text="Delivery to postal point"
												name="delivery"
												onChange={() => {
													showPostalPoints(errors, values);
												}}
											/>
											Delivery to the post
										</div>
										<div>
											<input
												checked={isAddressDelivery}
												value="address"
												type="radio"
												text="Delivery to your address"
												name="delivery"
												onChange={() => showAddress(values)}
											/>
											Delivery to your address
										</div>
									</div>
									<div>
										{!isAddressDelivery ? (
											// eslint-disable-next-line jsx-a11y/label-has-associated-control
											<label>
												Choose postal delivery point
												<Field
													as="select"
													name="postalCity"
													value={values.delivery}
													onChange={handleChange}
													onBlur={handleBlur}
													type="select"
												>
													<option value="Kyiv"> Kyiv</option>
													<option value="Lviv"> Lviv</option>
													<option value="Odessa"> Odessa</option>
												</Field>
												<Field
													as="select"
													name="postalPoint"
													value={values.delivery}
													onChange={handleChange}
													onBlur={handleBlur}
													type="select"
												>
													<option value="point1"> Point 1</option>
													<option value="point2"> Point 2</option>
													<option value="point3"> Point 3</option>
												</Field>
											</label>
										) : (
											<div>
												<InputField
													name="city"
													onChange={handleChange}
													onBlur={handleBlur}
													target="form"
													type="text"
													label="City"
													value={values.city}
													touched={touched.city}
													error={errors.city}
													helperText={errors.city}
												/>
												<InputField
													name="street"
													onChange={handleChange}
													onBlur={handleBlur}
													target="form"
													type="text"
													label="Street"
													value={values.street}
													touched={touched.street}
													error={errors.street}
													helperText={errors.street}
												/>
												<InputField
													name="house"
													onChange={handleChange}
													onBlur={handleBlur}
													target="form"
													type="text"
													label="House number"
													value={values.house}
													touched={touched.house}
													error={errors.house}
													helperText={errors.house}
												/>

												<InputField
													name="app"
													onChange={handleChange}
													onBlur={handleBlur}
													target="form"
													type="text"
													label="Flat number"
													value={values.app}
													touched={touched.app}
													error={errors.app}
													helperText={errors.app}
												/>
											</div>
										)}
									</div>
								</div>
								<div>
									<Button
										onClick={() => {}}
										type="submit"
										text="checkout"
										color="dark"
									/>
								</div>
							</form>
						)}
					</Formik>
				</>
			)}
		</LayoutContainer>
	);
};

export default Checkout;
