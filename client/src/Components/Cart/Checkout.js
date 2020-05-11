import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { withFormik, Form } from 'formik';
import * as yup from 'yup';
import { string, number } from 'yup';
import Button from '../UI/Button/Button';
import {
	StyledFormColumn,
	DisabledStyledButton,
	StyledLabel,
	StyledField,
} from './styles';
import PropTypes from 'prop-types';

function FormData({ errors, touched, isValid, submitForm }) {
	return (
		<Form>
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
				{errors.surname && touched.surname ? <div>{errors.surname}</div> : null}
				{/* {/* <Field className="field" name="age" placeholder="enter age"></Field>
      {errors.age && touched.age ? <div>{errors.age}</div> : null} */}
				{/* <Field
        className="field"
        name="address"
        placeholder="enter address"
      ></Field> */}
				{/* {errors.address && touched.address ? <div>{errors.address}</div> : null} */}
				<StyledLabel>
					{' '}
					Enter your phone number
					<StyledField className="field" name="phone" />
				</StyledLabel>
				{errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
			</StyledFormColumn>
			{isValid ? (
				<Button onClick={submitForm} text="checkout" />
			) : (
				<DisabledStyledButton
					type="submit"
					disabled
					// onClick={() =>
					//   validateForm().then(resolve => {
					//     if (
					//       Object.keys(resolve).length &&
					//       resolve.constructor === Object
					//     ) {
					//       console.log("fill the fields")
					//     }
					//   })
					// }
				>
					Checkout
				</DisabledStyledButton>
			)}
		</Form>
	);
}
const Checkout = withFormik({
	mapPropsToValues() {
		return {
			name: '',
			surname: '',
			// age: '',
			// address: '',
			phone: '',
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
