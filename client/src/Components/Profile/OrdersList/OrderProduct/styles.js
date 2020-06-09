import styled from 'styled-components';

export const Product = styled.div`
	display: flex;
	align-items: center;
`;

export const ProductImage = styled.img`
	width: 50px;
	height: auto;
	margin-right: 8px;
`;

export const ProductInfo = styled.div`
	font-size: 12px;
`;
export const ProductName = styled.p`
	text-transform: capitalize;
	font-weight: 600;
	margin-bottom: 8px;
`;

export const ProductDetails = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: 300;
`;

export const ProductPrice = styled.span``;

export const ProductQuantity = styled.p``;
