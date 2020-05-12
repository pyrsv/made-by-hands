import styled from 'styled-components';
import { Field } from 'formik';

export const CartContainer = styled.div`
	background: ${props => props.theme.lightPink};
	padding-bottom: 26px;
`;

export const CartItemListContainer = styled.div`
	border-bottom: 1px solid #d8846c;
	background: ${props => props.theme.lightPink};
`;

export const CartItemContainer = styled.div`
	position: relative;
	border-top: 1px solid ${props => props.theme.mainDark};
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
	@media (max-width: 576px) {
		margin-left: 0;
	}
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
	top: 5%;
	right: 0;
	font-weight: bold;
	background: #fffcfc;
	border: none;
	outline: none;
	border-radius: 4px;
	color: ${props => props.theme.mainDark};
`;

export const CartItemColor = styled.span`
	margin-top: 45px;
	@media (max-width: 576px) {
		margin-top: 15px;
	}
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

export const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid ${props => props.theme.mainDark};
	padding: 2% 2% 0 2%;
	margin-bottom: 10px;
	border-radius: 4px;
	position: relative;
`;

export const StyledFormColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 26px;
	width: 26%;
`;

export const DisabledStyledButton = styled.button`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	border-radius: 4px;
	font-size: 16px;
	min-width: 127px;
	cursor: pointer;
	width: ${props => (props.size === 'wide' ? '100%' : 'auto')};
	padding: 8px 12px;
	text-transform: ${props =>
		props.color === 'dark' ? 'uppercase' : 'titlecase'};
	font-weight: ${props => (props.color === 'dark' ? '600' : '500')};
	font-family: 'Raleway', sans-serif;
	background-color: #f0f0f0;
	color: #6d6d6d;
	border: 1px solid #6d6d6d;
	outline: none;
`;

export const StyledField = styled(Field)`
	display: inline-block;
	border: 1px solid #16161c;
	box-sizing: border-box;
	border-radius: 4px;
	padding: 6px 12px;
	font-family: Raleway;
	font-size: 16px;
	outline: none;
	background-color: transparent;
	width: 100%;
	margin-top: 6px;
`;
export const StyledLabel = styled.label`
	font-family: 'Raleway', sans-serif;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
`;
export const StyledRadio = styled.label`
	margin-bottom: 17px;
	font-family: 'Raleway', sans-serif;
	font-weight: 500;
	font-size: 14px;
	line-height: 16px;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const ColumnOfInputs = styled.div`
	display: flex;
	flex-direction: column;
`;
export const FirstColumn = styled.div`
	margin-top: 35px;
`;

export const FillTheFields = styled.div`
	font-family: 'Raleway', sans-serif;
	font-weight: 500;
	font-size: 22px;
	display: inline-block;
	position: absolute;
	top: 7%;
	left: 2%;
`;
