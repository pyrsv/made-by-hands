import React, { useState } from 'react';
import { withFormik, Form } from 'formik';
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

const valid = {
	name: string().required(),
	surname: string().required(),
	phone: number().required().positive().integer(),
};

function FormData({
	errors,
	touched,
	isValid,
	submitForm,
	values,
	handleBlur,
	handleChange,
}) {
	const [isPostalPoints, togglePP] = useState({ showed: true });
	const [isAddress, toggleAddress] = useState({ showed: false });

	const showPostalPoints = () => {
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
	const showAddress = () => {
		togglePP({ showed: false });
		toggleAddress({ showed: true });
		valid.city = string().required();
		valid.street = string().required();
		valid.house = number().required();
		values.delivery = '';
	};

	return (
		<Form>
			<FlexContainer>
				<FillTheFields>Fill the fields</FillTheFields>
				<StyledFormColumn>
					<FirstColumn>
						<StyledLabel>
							{' '}
							Enter your name
							<StyledField name="name" />
						</StyledLabel>
						{errors.name && touched.name ? <div>{errors.name}</div> : null}
						<StyledLabel>
							{' '}
							Enter your surname
							<StyledField name="surname" />
						</StyledLabel>
						{errors.surname && touched.surname ? (
							<div>{errors.surname}</div>
						) : null}

						<StyledLabel>
							{' '}
							Enter your phone number
							<StyledField name="phone" />
						</StyledLabel>
						{errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
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
							onClick={() => {
								showPostalPoints();
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
							onClick={() => showAddress()}
						/>
						Delivery to your address
					</StyledRadio>
					{isAddress.showed && (
						<ColumnOfInputs>
							<StyledLabel>
								{' '}
								Enter your city
								<StyledField name="city" />
							</StyledLabel>
							<StyledLabel>
								{' '}
								Enter your street
								<StyledField name="street" />
							</StyledLabel>
							<StyledLabel>
								{' '}
								Enter your house
								<StyledField name="house" />
							</StyledLabel>
						</ColumnOfInputs>
					)}
					{errors.city && touched.city ? <div>{errors.city}</div> : null}
					{errors.street && touched.street ? <div>{errors.street}</div> : null}
					{errors.house && touched.house ? <div>{errors.house}</div> : null}
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
	);
}
const Checkout = withFormik({
	mapPropsToValues() {
		return {
			name: '',
			surname: '',
			phone: '',
			delivery: 'point1',
		};
	},
	isInitialValid: false,
	validate: values => {
		const errors = {};
		if (valid.city) {
			if (!values.city) {
				errors.city = 'city is required';
			}
			if (!values.street) {
				errors.street = 'Street is required';
			}
			// eslint-disable-next-line no-restricted-globals
			if (!values.house || isNaN(+values.house)) {
				errors.house = 'house is required as number';
			}
		}
		return errors;
	},
	validationSchema: yup.object().shape(valid),
	// eslint-disable-next-line no-unused-vars
	handleSubmit(values, { setSubmitting }) {
		setSubmitting(false);
		// console.log('submited data ', values);
	},
})(FormData);

FormData.propTypes = {
	// eslint-disable-next-line react/require-default-props
	name: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	surname: PropTypes.string,
	phone: PropTypes.number.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	touched: PropTypes.object.isRequired,
	// eslint-disable-next-line react/forbid-prop-types
	errors: PropTypes.object.isRequired,
	isValid: PropTypes.bool.isRequired,
	submitForm: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	handleBlur: PropTypes.func.isRequired,
	delivery: PropTypes.string.isRequired,
	values: PropTypes.arrayOf(object).isRequired,
};

export default Checkout;
