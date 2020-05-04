import styled from 'styled-components';

export const ProductDescriptionContainer = styled.div`
	background-color: #f9ecef;
	padding: 40px 0;
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 20px;
`;

export const DescriptionArea = styled.div`
	dispaly: inline-block;
	max-width: 390px;
	margin: 30px 0 0 110px;
	@media screen and (max-width: 768px) {
		margin: 20px 0 0 90px;
	}
	@media screen and (max-width: 576px) {
		margin: 20px 0 0 90px;
	}
	text-align: justify;
`;

export const BlockText = styled.div`
	margin-bottom: 15px;
	display: ${props => props.flex && 'flex'};
`;

export const TextDescription = styled.p`
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
	@media screen and (max-width: 576px) {
		font-size: 10px;
		line-height: 10px;
	}
`;

export const NameOfProduct = styled.p`
	font-size: 20px;
	text-transform: uppercase;
	font-weight: bold;
	display: inline-block;
	align-self: center;
	padding-right: 20px;
	@media screen and (max-width: 992px) {
		font-size: 16px;
	}
	@media screen and (max-width: 768px) {
		font-size: 14px;
		padding-right: 10px;
	}
	@media screen and (max-width: 576px) {
		font-size: 12px;
		padding-right: 7px;
	}
`;

export const Price = styled.span`
	display: inline-block;
	font-family: 'Open Sans', sans-serif;
	width: 100%;
	color: ${props =>
		props.discounted ? props.theme.accentRed : props.theme.mainDark};
	font-size: 24px;
	/* @media (max-width: 992px) {
		font-size: 18px;
	} */
`;

export const OldPrice = styled.p`
	display: inline-block;
	text-decoration-line: line-through;
	font-family: 'Open Sans', sans-serif;
	padding-bottom: 7px;
`;

export const MinHeight = styled.div`
	height: 70vh;
`;
