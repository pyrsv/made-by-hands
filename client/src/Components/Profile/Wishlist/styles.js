import styled from 'styled-components';

export const WishlistContainer = styled.div`
	padding-bottom: 26px;
`;

export const WishlistItemImage = styled.img`
	height: auto;
	width: 100%;
	object-fit: cover;
`;

export const WishlistItemContainer = styled.div`
	position: relative;
	display: flex;
	padding: 24px 0;
	border-bottom: 1px solid ${props => props.theme.accentRed};
	@media (max-width: 576px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
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
	line-height: 26px;
	text-align: center;
`;

export const WishlistItemPrice = styled.div`
	margin-top: 43px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 56px;
	font-family: Arial, Helvetica, sans-serif;
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
	right: 0;
	top: 50%;
	transform: translate(0, -50%);
	@media (max-width: 576px) {
		position: static;
	}
`;
export const DeleteItemFromWishlist = styled.span`
	display: inline-block;
	position: absolute;
	top: 5%;
	right: 0;
	border: none;
	outline: none;
`;

export const WishlistItemImageContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 181px;
	height: 145px;
	border-radius: 4px;
`;
