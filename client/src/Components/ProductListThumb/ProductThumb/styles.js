import styled from 'styled-components';

export const Product = styled.div`
	display: flex;
	align-items: center;
`;

export const ProductImage = styled.img`
	width: ${props => (props.size === 'large' ? '70px' : '50px')};
	height: auto;
	margin-right: ${props => (props.size === 'large' ? '10px' : '8px')};
`;

export const ProductInfo = styled.div`
	font-size: ${props => (props.size === 'large' ? '14px' : '12px')};
`;
export const ProductName = styled.p`
	text-transform: capitalize;
	font-weight: 600;
	margin-bottom: ${props => (props.size === 'large' ? '10px' : '8px')};
`;

export const ProductDetails = styled.div`
	display: flex;
	justify-content: space-between;
	font-weight: 300;
`;

export const ProductPrice = styled.span``;

export const ProductQuantity = styled.p``;
