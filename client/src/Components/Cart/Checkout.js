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
} from './styles';
import PropTypes from 'prop-types';

function FormData({ errors, touched, isValid, submitForm }) {
	const [isPostalPoints, togglePP] = useState({ showed: false });
	const [isAddress, toggleAddress] = useState({ showed: false });

	const showPostalPoints = () => {
		togglePP({ showed: true });
		toggleAddress({ showed: false });
	};
	const showAddress = () => {
		togglePP({ showed: false });
		toggleAddress({ showed: true });
	};

	return (
		<Form>
			<FlexContainer>
				<StyledFormColumn>
					<StyledLabel>
						{' '}
						Enter your name
						<StyledField className="field" name="name" />
					</StyledLabel>
					{errors.name && touched.name ? <div>{errors.name}</div> : null}
					<StyledLabel>
						{' '}
						Enter your surname
						<StyledField className="field" name="surname" />
					</StyledLabel>
					{errors.surname && touched.surname ? (
						<div>{errors.surname}</div>
					) : null}

					<StyledLabel>
						{' '}
						Enter your phone number
						<StyledField className="field" name="phone" />
					</StyledLabel>
					{errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
				</StyledFormColumn>
				<StyledFormColumn>
					<StyledLabel>
						<input
							type="radio"
							text="Delivery to postal point"
							name="delivery"
							onClick={() => {
								showPostalPoints();
							}}
						/>
						Delivery to postal point
					</StyledLabel>
					<StyledLabel>
						<input
							type="radio"
							text="Delivery to address"
							name="delivery"
							onClick={() => showAddress()}
						/>
						Delivery to address
					</StyledLabel>
					{isPostalPoints.showed && (
						<StyledLabel>
							Choose postal delivery point
							<StyledField as="select" name="delivery">
								<option value="point1"> point 1</option>
								<option value="point2"> point 2</option>
							</StyledField>
						</StyledLabel>
					)}
					{isAddress.showed && (
						<>
							<StyledLabel>
								{' '}
								Enter your city
								<StyledField className="field" name="city" />
							</StyledLabel>
							<StyledLabel>
								{' '}
								Enter your street
								<StyledField className="field" name="street" />
							</StyledLabel>
							<StyledLabel>
								{' '}
								Enter your house
								<StyledField className="field" name="house" />
							</StyledLabel>
						</>
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
	validationSchema: yup.object().shape({
		name: string().required(),
		surname: string().required(),
		// age: number().required().positive().integer(),
		// address: string().required(),
		// phone: string().matches(/^[0-9]\d{9}$/, {
		//   message: 'Please enter valid number.',
		//   excludeEmptyString: false,
		// }),
		phone: number().required().positive().integer(),
	}),
	// eslint-disable-next-line no-unused-vars
	handleSubmit(values) {
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
};

export default Checkout;
