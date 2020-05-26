import styled from 'styled-components';

export const ProductDescriptionContainer = styled.div`
	background-color: #f9ecef;
	padding: 80px 0;
	@media screen and (max-width: 992px) {
		padding: 60px 0;
	}
	@media screen and (max-width: 768px) {
		padding: 40px 0;
	}
	@media screen and (max-width: 576px) {
		padding: 30px 0;
	}
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
	@media screen and (max-width: 480px) {
		margin: 20px 0 0;
	}
`;

export const BlockText = styled.div`
	margin-bottom: 40px;
	display: ${props => props.flex && 'flex'};
	@media screen and (max-width: 992px) {
		margin-bottom: 30px;
	}
	@media screen and (max-width: 768px) {
		margin-bottom: 25px;
	}
	@media screen and (max-width: 576px) {
		margin-bottom: 15px;
	}
	@media screen and (max-width: 480px) {
		margin-bottom: 10px;
	}
`;

export const TextDescription = styled.p`
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	font-family: 'Open Sans', sans-serif;
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
	@media screen and (max-width: 576px) {
		line-height: 15px;
	}
`;

export const NameOfProduct = styled.p`
	font-size: 20px;
	letter-spacing: 0.19em;
	text-transform: uppercase;
	font-weight: bold;
	display: inline-block;
	align-self: center;
	padding-right: 25px;
	font-family: 'Open Sans', sans-serif;
	@media screen and (max-width: 992px) {
		font-size: 18px;
	}
	@media screen and (max-width: 768px) {
		font-size: 16px;
		padding-right: 15px;
	}
	@media screen and (max-width: 576px) {
		font-size: 12px;
	}
`;

export const Price = styled.span`
	display: inline-block;
	font-family: 'Open Sans', sans-serif;
	width: 100%;
	color: ${props =>
		props.discounted ? props.theme.accentRed : props.theme.mainDark};
	font-size: 27px;
	@media screen and (max-width: 992px) {
		font-size: 22px;
	}
	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const OldPrice = styled.p`
	display: inline-block;
	text-decoration-line: line-through;
	font-family: 'Open Sans', sans-serif;
	padding-bottom: 7px;
	font-size: 14px;

	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

export const MinHeight = styled.div`
	height: 70vh;
`;
