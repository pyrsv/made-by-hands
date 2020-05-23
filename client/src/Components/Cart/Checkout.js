/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { string, number } from 'yup';
import Button from '../UI/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import {
	FlexContainer,
	StyledFormColumn,
	StyledLabel,
	StyledField,
	ButtonWrapper,
	ColumnOfInputs,
	// FirstColumn,
	StyledRadio,
	FillTheFields,
} from './styles';
import PropTypes, { object } from 'prop-types';
// import InputField from '../UI/InputFiels/InputField';
import { placeOrder } from '../../store/actions/orderActions';

const valid = {
	name: string().required(),
	surname: string().required(),
	phone: number().required().positive().integer(),
	email: string().email(),
};

const Checkout = ({ sumPrice, goods }) => {
	const [isPostalPoints, togglePP] = useState({ showed: true });
	const [isAddress, toggleAddress] = useState({ showed: false });
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.currentUser) || {};
	const isFetching = useSelector(state => state.orders.isOrdersFetching);

	if (user && !user.address) {
		user.address = {};
	}

	const showPostalPoints = errors => {
		togglePP({ showed: true });
		toggleAddress({ showed: false });
		errors.city = '';
		errors.street = '';
		errors.house = '';
		errors.app = '';
		delete valid.city;
		delete valid.street;
		delete valid.house;
	};
	const showAddress = (errors, values) => {
		togglePP({ showed: false });
		toggleAddress({ showed: true });
		valid.city = string().required();
		valid.street = string().required();
		valid.house = string().required();
		valid.app = number().required();
		values.delivery = '';
	};

	return (
		<Formik
			user
			showAddress
			showPostalPoints
			isPostalPoints
			isAddress
			sumPrice
			goods
			initialValues={{
				name: user.firstName || '',
				surname: user.lastName || '',
				email: user.email || '',
				phone: user.phone || '',
				delivery: 'point1',
				city: user?.address.city || '',
				house: user?.address.houseNumber || '',
				app: user?.address.flat || '',
				street: user?.address.street || '',
				amountOfPayment: sumPrice,
				items: goods,
			}}
			isInitialValid={false}
			validate={values => {
				const errors = {};
				if (valid.city) {
					if (!values.city || !isNaN(+values.street)) {
						errors.city = 'city is required as a string';
					}
					if (!values.street || !isNaN(+values.street)) {
						errors.street = 'Street is required as a string';
					}
					if (!values.house) {
						errors.house = 'house is required';
					}
					if (!values.app || isNaN(+values.app)) {
						errors.app = 'app is required as a number';
					}
				}
				return errors;
			}}
			validationSchema={yup.object().shape(valid)}
			onSubmit={values => {
				// eslint-disable-next-line no-console
				console.log('submited data ', values);

				const shippingInfo = {
					city: `${values.city}`,
					price: '50UAH',
				};
				const delivery = {
					country: 'Ukraine',
					city: `${values.city}`,
					address: `${values.street} ${values.house}  ${values.app}`,
				};
				const payment = {
					type: 'credit card',
					issuer: 'MasterCard',
				};
				if (Object.keys(user).length > 1 && user.constructor === Object) {
					values.items = null;
				}

				dispatch(placeOrder(values, shippingInfo, delivery, payment));
			}}
		>
			{({
				field,
				errors,
				touched,
				isValid,
				submitForm,
				values,
				handleBlur,
				handleChange,
			}) => (
				<Form>
					<FillTheFields>Fill the fields</FillTheFields>
					<FlexContainer>
						<StyledFormColumn>
							{/* <FirstColumn> */}
							<StyledLabel>
								{' '}
								Enter your name
								<StyledField
									name="name"
									onChange={handleChange}
									onBlur={handleBlur}
									target="form"
									type="text"
								/>
							</StyledLabel>

							{errors.name && touched.name ? <div>{errors.name}</div> : null}
							<StyledLabel>
								{' '}
								Enter your surname
								<StyledField
									name="surname"
									onChange={handleChange}
									onBlur={handleBlur}
									target="form"
									type="text"
								/>
							</StyledLabel>
							{errors.surname && touched.surname ? (
								<div>{errors.surname}</div>
							) : null}
							<StyledLabel>
								{' '}
								Enter your email
								<StyledField
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									target="form"
									type="email"
								/>
							</StyledLabel>
							{errors.email && touched.email ? <div>{errors.email}</div> : null}
							<StyledLabel>
								{' '}
								Enter your phone number
								<StyledField
									name="phone"
									onChange={handleChange}
									onBlur={handleBlur}
									target="form"
									type="text"
								/>
							</StyledLabel>
							{errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
							{/* </FirstColumn> */}
						</StyledFormColumn>

						<StyledFormColumn>
							<StyledRadio>
								<input
									target="form"
									checked={!isAddress.showed}
									value="postal"
									type="radio"
									text="Delivery to postal point"
									name="delivery"
									onChange={handleChange}
									onClick={() => {
										showPostalPoints(errors, values);
									}}
								/>
								Delivery to the post
							</StyledRadio>
							<StyledRadio>
								<input
									value="address"
									type="radio"
									text="Delivery to your address"
									name="delivery"
									onClick={() => showAddress(errors, values)}
								/>
								Delivery to your address
							</StyledRadio>
						</StyledFormColumn>
						<StyledFormColumn>
							{isPostalPoints.showed && (
								<StyledLabel>
									Choose postal delivery point
									<StyledField
										as="select"
										name="delivery"
										value={values.delivery}
										onChange={handleChange}
										onBlur={handleBlur}
										target="form"
										type="select"
									>
										<option value="point1"> point 1</option>
										<option value="point2"> point 2</option>
										<option value="point3"> point 3</option>
									</StyledField>
								</StyledLabel>
							)}
							{isAddress.showed && (
								<ColumnOfInputs>
									<StyledLabel>
										{' '}
										Enter your city
										<StyledField
											name="city"
											onChange={handleChange}
											onBlur={handleBlur}
											target="form"
											type="text"
										/>
									</StyledLabel>
									{errors.city && touched.city ? (
										<div>{errors.city}</div>
									) : null}
									<StyledLabel>
										{' '}
										Enter your street
										<StyledField
											name="street"
											onChange={handleChange}
											onBlur={handleBlur}
											target="form"
											type="text"
										/>
									</StyledLabel>
									{errors.street && touched.street ? (
										<div>{errors.street}</div>
									) : null}
									<StyledLabel>
										{' '}
										Enter your house
										<StyledField
											name="house"
											onChange={handleChange}
											onBlur={handleBlur}
											target="form"
											type="text"
											{...field}
										/>
									</StyledLabel>
									{errors.house && touched.house ? (
										<div>{errors.house}</div>
									) : null}
									<StyledLabel>
										{' '}
										Enter your appartment number
										<StyledField
											name="app"
											onChange={handleChange}
											onBlur={handleBlur}
											target="form"
											type="text"
										/>
										{errors.app && touched.app ? <div>{errors.app}</div> : null}
									</StyledLabel>
								</ColumnOfInputs>
							)}
						</StyledFormColumn>
					</FlexContainer>
					<ButtonWrapper>
						{isValid && !isFetching ? (
							<Button
								onClick={submitForm}
								text="checkout"
								disabled={!isValid}
							/>
						) : (
							<Button
								onClick={submitForm}
								text="checkout"
								disabled={!isValid}
								color="#f0f0f0"
							/>
						)}
					</ButtonWrapper>
				</Form>
			)}
		</Formik>
	);
};

Form.propTypes = {
	name: PropTypes.string,
	surname: PropTypes.string,
	phone: PropTypes.number,
	touched: PropTypes.objectOf(string),
	errors: PropTypes.objectOf(object),
	isValid: PropTypes.bool,
	submitForm: PropTypes.func,
	handleChange: PropTypes.func,
	handleBlur: PropTypes.func,
	delivery: PropTypes.string,
	values: PropTypes.objectOf(string),
};

Checkout.propTypes = {
	sumPrice: PropTypes.number,
	goods: PropTypes.arrayOf(object),
};

Form.defaultProps = {
	delivery: undefined,
	phone: undefined,
	errors: undefined,
	values: undefined,
	name: undefined,
	surname: undefined,
	touched: undefined,
	isValid: undefined,
	submitForm: undefined,
	handleChange: undefined,
	handleBlur: undefined,
};

Checkout.defaultProps = {
	sumPrice: undefined,
	goods: undefined,
};

export default Checkout;
