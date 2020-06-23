import styled from 'styled-components';

export const CheckoutWrapper = styled.div`
	display: grid;
	padding-bottom: 80px;
	grid-template-columns: 3fr 1fr;

	@media (max-width: 992px) {
		grid-gap: 30px;

		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 576px) {
		padding-bottom: 40px;

		grid-template-columns: 1fr;
	}
`;

export const CheckoutSubheading = styled.h3`
	font-weight: 600;
	font-size: 18px;
	margin-bottom: 45px;
`;

export const ProductsWrapper = styled.div`
	border-left: 1px solid ${props => props.theme.mainDark};
	padding-left: 20px;
`;

export const OrderWrapper = styled.div`
	@media (max-width: 576px) {
		order: -1;
	}
`;

export const CheckoutSummary = styled.div``;

export const CheckoutSummaryItem = styled.p`
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;

	font-weight: ${props => (props.bold ? '600' : '300')};
`;
