import styled from 'styled-components';

export const Card = styled.div`
	margin: 0 auto;
	max-width: 370px;
	font-family: 'Raleway', sans-serif;
	color: ${props => props.theme.mainDark};
`;

export const CardImage = styled.img`
	width: 100%;
	height: 315px;
	object-fit: cover;
	vertical-align: middle;
`;

export const CardInfo = styled.div`
	background-color: ${props =>
		props.type === 'light' ? props.theme.lightPink : props.theme.mainOlive};
	padding: 16px 12px 19px;
`;

export const ProductName = styled.p`
	text-transform: capitalize;
	font-weight: 600;
	font-size: 22px;
	max-width: 85%;
	min-height: 66px;
	margin-bottom: 10px;
	line-height: 22px;
`;

export const PriceContainer = styled.div`
	position: relative;
	text-align: right;
`;

export const Price = styled.span`
	display: inline-block;
	font-family: 'Open Sans', sans-serif;
	width: 100%;
	color: ${props =>
		props.discounted ? props.theme.accentRed : props.theme.mainDark};
	font-size: 24px;
`;

export const OldPrice = styled.span`
	display: inline-block;
	font-size: 14px;
	text-decoration-line: line-through;
	position: absolute;
	top: -15px;
	left: 0;
`;

export const CardInfoRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	&:last-child {
		align-items: center;
	}
`;
