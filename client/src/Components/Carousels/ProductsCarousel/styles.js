import styled from 'styled-components';

export const ProductCardContainer = styled.div`
	width: 98%;
	margin: auto;
`;

export const ProductCarouselContainer = styled.div`
	margin: 20px auto;
`;

export const NewArrivalsBackground = styled.div`
	padding: 20px 0 20px 0;
	background: ${props => props.theme.mainOlive};
`;



export const StyledTitle = styled.span`
	color: ${props => {
	return	props.color === "dark" ? props.theme.mainDark : props.theme.lightPink}};
	text-transform: uppercase;
	font-family: Raleway, sans-serif;
	font-style: normal;
	font-weight: 900;
	font-size: 72px;
	line-height: 85px;
	letter-spacing: 0.08em;
	color: #f9ecef;
`;
