import styled from 'styled-components';

export const CartContainer = styled.div`
	background: ${props => props.theme.lightPink};
	padding-bottom: 26px;
`;

export const CartItemListContainer = styled.div`
	border-top: 1px solid ${props => props.theme.mainDark};
	border-bottom: 1px solid #d8846c;
	background: ${props => props.theme.lightPink};
`;

export const CartItemContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 210px;
	align-items: center;
`;

export const CartItemImage = styled.img`
	width: 100%;
	width: 181px;
	height: 145px;
	object-fit: cover;
	vertical-align: middle;
`;

export const CartItemInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 298px;
	margin-left: 44px;
	font-family: Raleway, sans-serif;
	font-style: normal;
	font-weight: 600;
	font-size: 22px;
	line-height: 18px;
`;

export const QuantityContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 100px;
`;

export const CartItemQuantity = styled.div`
	height: 39px;
	width: 39px;
	background: #fffcfc;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: Gabriela, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 15px;
`;

export const DecreaseQuantity = styled.button`
	background: #fffcfc;
	border-bottom-left-radius: 4px;
	border-top-left-radius: 4px;
	height: 39px;
	width: 39px;
	border: none;
	border-right: 1px solid #747a82;
`;

export const IncreaseQuantity = styled.button`
	background: #fffcfc;
	border-bottom-right-radius: 4px;
	border-top-right-radius: 4px;
	height: 39px;
	width: 39px;
	border: none;
	border-left: 1px solid #747a82;
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
