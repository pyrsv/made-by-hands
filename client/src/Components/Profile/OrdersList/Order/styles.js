import styled from 'styled-components';

export const OrderContainer = styled.div`
	padding-bottom: 18px;
	margin-bottom: 18px;
	border-bottom: 1px solid ${props => props.theme.accentRed};
`;

export const OrderInfo = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-areas: 'products delivery summary';
	justify-content: space-between;
	align-items: start;

	@media (max-width: 576px) {
		grid-template-columns: 1fr 1fr;
		grid-template-areas: 'products products' 'delivery summary';
	}
`;

export const OrderData = styled.div`
	font-size: 14px;
	margin-bottom: 17px;
`;

export const OrderProductsList = styled.div`
	grid-area: products;
`;

export const OrderDelivery = styled.div`
	justify-self: center;
	grid-area: delivery;
	@media (max-width: 576px) {
		align-self: center;

		justify-self: start;
	}
`;

export const OrderNumber = styled.span`
	font-weight: 600;
`;

export const OrderDate = styled.span`
	font-weight: 300;
`;

export const DeliveryInfo = styled.p`
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
	margin-bottom: 5px;
`;

export const OrderSummary = styled.div`
	width: 120px;
	justify-self: end;
	text-align: right;
	grid-area: summary;
`;

export const OrderStatus = styled.span`
	display: inline-block;
	margin-bottom: 40px;
	font-size: 15px;
	font-weight: 500px;
	color: ${({ status }) => {
		switch (status) {
			case 'Pending':
				return ' #C4C4C4';
			case 'On the way':
				return '#F9A602';
			case 'Delivered':
				return '#139630';
			case 'Canceled':
				return props => props.theme.accentRed;
			default:
				return ' #C4C4C4';
		}
	}};
`;

export const OrderPricing = styled.div`
	font-size: 14px;
`;

export const OrderPricingItem = styled.p`
	display: flex;
	justify-content: space-between;
	margin-bottom: 5px;

	font-weight: ${props => (props.bold ? '600' : '300')};
`;
