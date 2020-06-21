import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import Title from '../UI/Title/title';
import Button from '../UI/Button/Button';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import CheckoutSumbit from './CheckoutSubmit/CheckoutSubmit';
import InputField from '../UI/InputFiels/InputField';
import {} from './styles';

const Checkout = () => {
	const [isAddressDelivery, setAddressDelivery] = useState(false);
	const [isCheckoutSuccess, setCheckoutSuccess] = useState(false);
	const [orderNo, setOrderNo] = useState(null);
	const user = useSelector(state => state.auth.currentUser) || {};
	const products = useSelector(state => state.cartReducer.currentCart) || {};

	if (user && !user.address) {
		user.address = {};
	}

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
					city: values.delivery.deliveryCity,
					postalOffice: values.delivery.deliveryPoint,
			  }
			: null;
		checkoutData.deliveryAddress = isAddressDelivery
			? JSON.stringify({
					country: 'Ukraine',
					city: values.delivery.city,
					address: `${values.delivery.street} ${values.delivery.house}, fl.${values.delivery.app}`,
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
							delivery: {
								deliveryPoint: '2',
								deliveryCity: 'Kyiv',
								city: user?.address.city || '',
								house: user?.address.houseNumber || '',
								app: user?.address.flat || '',
								street: user?.address.street || '',
							},
						}}
						onSubmit={handleFormSubmit}
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
														setAddressDelivery(true);
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
													onChange={() => setAddressDelivery(false)}
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
														name="delivery.postalCity"
														value={values.delivery.deliveryCity}
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
														name="delivery.postalPoint"
														value={values.delivery.postalPoint}
														onChange={handleChange}
														onBlur={handleBlur}
														type="select"
													>
														<option value="1"> Point 1</option>
														<option value="2"> Point 2</option>
														<option value="3"> Point 3</option>
													</Field>
												</label>
											) : (
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
							);
						}}
					</Formik>
				</>
			)}
		</LayoutContainer>
	);
};

export default Checkout;
