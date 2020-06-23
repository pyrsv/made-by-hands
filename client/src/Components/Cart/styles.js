import styled from 'styled-components';

export const CartContainer = styled.div`
	padding-bottom: 26px;
`;

export const CartItemListContainer = styled.div`
	border-bottom: 1px solid #d8846c;
`;

export const CartItemContainer = styled.div`
	position: relative;
	border-top: 1px solid ${props => props.theme.accentRed};
	display: flex;
	justify-content: space-between;
	height: 210px;
	align-items: center;
	@media (max-width: 576px) {
		flex-direction: column;
		height: 340px;
		padding: 10px;
	}
`;

export const CartItemImage = styled.img`
	width: 100%;
	width: 181px;
	height: 145px;
	object-fit: cover;
	vertical-align: middle;
`;

export const CartItemInfo = styled.div`
	text-transform: capitalize;
	display: flex;
	flex-direction: column;
	width: 298px;
	margin-left: 44px;
	font-family: Raleway, sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 18px;
	@media (max-width: 576px) {
		align-items: center;
		margin-left: 0;
		text-align: center;
	}
`;

export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 100px;
	min-width: 117px;
	border-radius: 4px;
	overflow: hidden;
	@media (max-width: 576px) {
		margin-left: 0;
	}
`;

export const CartItemQuantity = styled.div`
	background: #fffcfc;
	padding: 8px 0;
	width: 39px;
	text-align: center;
	border-right: 1px solid #747a82;
	border-left: 1px solid #747a82;

	font-size: 14px;
	line-height: 22px;
`;

export const QuantityButton = styled.button`
	width: 39px;
	padding: 8px 0;
	font-family: Gabriela, sans-serif;
	font-weight: 300;
	background: #fffcfc;
	border: none;
	line-height: 22px;
	font-size: 28px;
`;

export const CartItemPrice = styled.div`
	font-family: Gabriela, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 24px;
	line-height: 15px;
`;
export const CartItemOldPrice = styled.div`
	text-decoration: line-through;
	margin-top: 5px;
`;

export const SumContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;
	font-size: 24px;
	font-family: Gabriela, sans-serif;
	margin-top: 10px;
	@media (max-width: 576px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

export const DeleteItemFromCart = styled.button`
	display: inline-block;

	position: absolute;
	background-color: transparent;
	outline: none;
	border: none;
	top: 5%;
	right: 0;
`;

export const CartItemColor = styled.span`
	font-size: 16px;
	margin-top: 45px;
	@media (max-width: 576px) {
		margin-top: 15px;
	}
`;

export const ColorValue = styled.span`
	text-transform: uppercase;
`;

export const CartIsEmpty = styled.div`
	text-align: center;
	font-family: Gabriela, sans-serif;
	text-transform: uppercase;
	font-family: 36px;
	color: ${props => props.theme.accentRed};
	font-weight: bold;
	margin-top: 20px;
`;

export const FirstColumn = styled.div`
	margin-top: 34px;
	text-align: center;
`;

export const CartItemPricePerOne = styled.div`
	font-size: 14px;
	margin-top: 5px;
`;
