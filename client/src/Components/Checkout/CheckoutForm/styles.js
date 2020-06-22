import styled from 'styled-components';
import { Field } from 'formik';

export const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 15px;
	min-height: 470px;

	@media (max-width: 992px) {
		grid-template-columns: 1fr;
	}
`;

export const FormColumn = styled.div`
	max-width: 300px;

	@media (max-width: 992px) {
		max-width: 400px;
	}

	@media (max-width: 576px) {
		max-width: initial;
	}
`;

export const DeliveryOptions = styled.div`
	display: flex;
	flex-direction: column;
`;

export const StyledSelect = styled(Field)`
	border: 1px solid #16161c;
	box-sizing: border-box;
	border-radius: 4px;
	padding: 6px 12px;
	font-family: Raleway;
	font-size: 16px;
	outline: none;
	background-color: transparent;
	width: 100%;
	margin-bottom: 20px;
`;

export const CheckoutSubheading = styled.h3`
	font-weight: 600;
	font-size: 18px;
	margin-bottom: 45px;
`;

export const DeliveryItem = styled.div``;

export const DeliveryItemRadioButton = styled.div`
	margin-bottom: 20px;
`;
