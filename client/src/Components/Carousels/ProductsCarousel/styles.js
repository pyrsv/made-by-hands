import styled from 'styled-components';
import Slider from 'react-slick'

export const ProductCardContainer = styled.div`
  width: 98%;
  margin: auto;
	@media (max-width: 1400px) {
		width: 80%;
	}
`;

export const ProductCarouselContainer = styled.div`
	margin: 20px auto;
`;

export const NewArrivalsBackground = styled.div`
	padding: 20px 0 20px 0;
	background: ${props => props.theme.mainOlive};
`;

export const NewArrivals = styled.span`
	text-transform: uppercase;
	font-family: Raleway, sans-serif;
	font-style: normal;
	font-weight: 900;
	font-size: 72px;
	line-height: 85px;
	letter-spacing: 0.08em;
	color: #f9ecef;
`;

export const StyledSlider = styled(Slider)`
	@media (max-width: 1280px) {
	right: 3%;
	}
position: relative;

background-size: cover
`