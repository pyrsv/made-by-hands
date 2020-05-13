/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { string, number } from 'yup';
import Button from '../UI/Button/Button';
import {
	FlexContainer,
	StyledFormColumn,
	DisabledStyledButton,
	StyledLabel,
	StyledField,
	ButtonWrapper,
	ColumnOfInputs,
	FirstColumn,
	StyledRadio,
	FillTheFields,
} from './styles';
import PropTypes, { object } from 'prop-types';
import InputField from '../UI/InputFiels/InputField';

const valid = {
	name: string().required(),
	surname: string().required(),
	phone: number().required().positive().integer(),
};

const Checkout = ({ sumPrice, goods }) => {
	const [isPostalPoints, togglePP] = useState({ showed: true });
	const [isAddress, toggleAddress] = useState({ showed: false });

	const showPostalPoints = (errors, values) => {
		togglePP({ showed: true });
		toggleAddress({ showed: false });
		errors.city = '';
		errors.street = '';
		errors.house = '';
		values.city = '';
		values.house = '';
		values.street = '';
		delete valid.city;
		delete valid.street;
		delete valid.house;
	};
	const showAddress = (errors, values) => {
		togglePP({ showed: false });
		toggleAddress({ showed: true });
		valid.city = string().required();
		valid.street = string().required();
		valid.house = number().required();
		values.delivery = '';
	};
	return (
		<Formik
			showAddress
			showPostalPoints
			isPostalPoints
			isAddress
			sumPrice
			goods
			initialValues={{
				name: '',
				surname: '',
				phone: '',
				delivery: 'point1',
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
						errors.house = 'house is required as a number';
					}
				}
				return errors;
			}}
			validationSchema={yup.object().shape(valid)}

			// onSubmit = {(values ) => {
			// 	// console.log('submited data ', values);
			// }}
		>
			{({
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
							<FirstColumn>
								<StyledLabel>
									{' '}
									Enter your name
									<InputField
										name="name"
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</StyledLabel>

								{errors.name && touched.name ? <div>{errors.name}</div> : null}
								<StyledLabel>
									{' '}
									Enter your surname
									<InputField
										name="surname"
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</StyledLabel>
								{errors.surname && touched.surname ? (
									<div>{errors.surname}</div>
								) : null}

								<StyledLabel>
									{' '}
									Enter your phone number
									<InputField
										name="phone"
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								</StyledLabel>
								{errors.phone && touched.phone ? (
									<div>{errors.phone}</div>
								) : null}
							</FirstColumn>
						</StyledFormColumn>

						<StyledFormColumn>
							<StyledRadio>
								<input
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

							{isPostalPoints.showed && (
								<StyledLabel>
									Choose postal delivery point
									<StyledField
										as="select"
										name="delivery"
										value={values.delivery}
										onChange={handleChange}
										onBlur={handleBlur}
									>
										<option value="point1"> point 1</option>
										<option value="point2"> point 2</option>
									</StyledField>
								</StyledLabel>
							)}
						</StyledFormColumn>
						<StyledFormColumn>
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
							{isAddress.showed && (
								<ColumnOfInputs>
									<StyledLabel>
										{' '}
										Enter your city
										<InputField
											name="city"
											onChange={handleChange}
											onBlur={handleBlur}
										/>
									</StyledLabel>
									{errors.city && touched.city ? (
										<div>{errors.city}</div>
									) : null}
									<StyledLabel>
										{' '}
										Enter your street
										<InputField
											name="street"
											onChange={handleChange}
											onBlur={handleBlur}
										/>
									</StyledLabel>
									{errors.street && touched.street ? (
										<div>{errors.street}</div>
									) : null}
									<StyledLabel>
										{' '}
										Enter your house
										<InputField
											name="house"
											onChange={handleChange}
											onBlur={handleBlur}
										/>
									</StyledLabel>
									{errors.house && touched.house ? (
										<div>{errors.house}</div>
									) : null}
								</ColumnOfInputs>
							)}
						</StyledFormColumn>
					</FlexContainer>
					<ButtonWrapper>
						{isValid ? (
							<Button onClick={submitForm} text="checkout" />
						) : (
							<DisabledStyledButton type="submit" disabled>
								Checkout
							</DisabledStyledButton>
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
