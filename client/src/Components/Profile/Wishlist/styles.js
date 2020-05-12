import styled from 'styled-components';

export const WishlistContainer = styled.div`
	background: ${props => props.theme.lightPink};
	padding-bottom: 26px;
`;

export const WishlistItemImage = styled.img`
	height: 100%;
	width: auto;
`;

export const WishlistItemContainer = styled.div`
	position: relative;
	display: flex;
	padding: 24px 0 24px 0;
	border-bottom: 1px solid ${props => props.theme.mainDark};
	@media (max-width: 576px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 24px 0 10px 0;
	}
`;
export const WishlistItemInfo = styled.div`
	margin-left: 56px;
	display: flex;
	flex-direction: column;
	width: 30%;
	font-family: Gabriela, sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 18px;
	color: ${props => props.theme.mainDark};
	text-transform: capitalize;
	@media (max-width: 576px) {
		justify-content: center;
		align-items: center;
		width: 100%;
		margin: 30px 0 10px 0;
		text-align: center;
	}
`;
export const WishlistItemName = styled.span`
	text-decoration-line: underline;
	font-style: normal;
	font-weight: bold;
	font-size: 22px;
	text-align: center;
`;

export const WishlistItemPrice = styled.div`
	margin-top: 43px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 56px;
	font-family: Gabriela;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 15px;
	@media (max-width: 576px) {
		margin-top: 10px;
		height: 35px;
	}
`;

export const ButtonInWishlist = styled.div`
	position: absolute;
	right: 5%;
	top: 50%;
	transform: translate(0, -50%);
	@media (max-width: 576px) {
		position: static;
	}
`;
export const DeleteItemFromWishlist = styled.button`
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

export const WishlistItemImageContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 181px;
	height: 145px;
	border-radius: 4px;
`;
