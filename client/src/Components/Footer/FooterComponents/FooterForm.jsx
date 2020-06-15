import React from 'react';
import { Formik } from 'formik';
import Button from '../../UI/Button/Button';
import InputField from '../../UI/InputFiels/InputField';
import { FooterSection, TitleFooterText } from '../style';
import { FooterText } from '../FooterText/FooterText';
import { SetSubscriberEmail } from '../../../utils/setSubscriberEmail';

const FooterForm = () => (
	<div>
		<Formik
			initialValues={{ email: '' }}
			validate={values => {
				const errors = {};
				if (!values.email) {
					errors.email = 'Invalid email address';
				} else if (
					!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
				) {
					errors.email = 'Invalid email address';
				}
				return errors;
			}}
			onSubmit={values => {
				SetSubscriberEmail(values.email);
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
				// isSubmitting,
			}) => (
				<form onSubmit={handleSubmit}>
					<FooterSection>
						<TitleFooterText>
							Subscribe and get first all the best!
						</TitleFooterText>

						<InputField
							type="email"
							name="email"
							placeholder="Enter your email "
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
							target="search"
						/>

						{errors.email && touched.email && errors.email}
						<Button
							text="Send"
							color="light"
							onClick={() => {}}
							icon="envelope"
							type="submit"
							// disabled={isSubmitting}
						>
							Submit
						</Button>
					</FooterSection>
				</form>
			)}
		</Formik>
	</div>
);

export default FooterForm;
