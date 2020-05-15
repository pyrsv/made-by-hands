import React from 'react';
import { Formik } from 'formik';
import Button from '../UI/Button/Button';
import InputField from '../UI/InputFiels/InputField';
import { FooterSection } from './style';
import { FooterText } from './FooterText/FooterText';

const FooterFormTest = () => {
	return (
		<FooterSection>
			<Formik
				initialValues={{
					email: '',
				}}
				onSubmit={values => {
					console.log(JSON.stringify(values, null, 2));
				}}
			
			>
				{({ values, submitForm, handleChange }) => (
					<FooterSection>
						<FooterText
							type="title"
							text="Subscribe and get first all the best!"
						/>
						<InputField
							type="text"
							name="email"
							placeholder="Enter your email "
							onChange={handleChange}
							required
						/>
						<Button
							type="submit"
							onClick={submitForm}
							text="Send"
							color="light"
							icon="envelope"
						/>
					</FooterSection>
				)}
			</Formik>
		</FooterSection>
	);
};

export default FooterFormTest;
