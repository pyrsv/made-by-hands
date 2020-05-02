import styled from 'styled-components';

export const MinHeightContainer = styled.div`
	min-height: 50vh;
	width: 100%;
`;

export const SliderContainer = styled.div`
	position: relative;
	width: 100%;
	height: 50vh;
	@media screen and (max-width: 992px) {
		height: 40vh;
	}

	@media screen and (max-width: 576px) {
		height: 30vh;
	}
`;

export const CarouselTextContainer = styled.div`
	position: absolute;
	text-align: initial;
	top: 20%;
	left: 5%;
	width: 40%;
	@media screen and (max-width: 992px) {
		width: 50%;
	}

	@media screen and (max-width: 576px) {
		width: 60%;
	}
`;

export const CarouselTitle = styled.p`
	color: #f9ecef;
	font-weight: bold;
	text-transform: uppercase;
	font-size: 36px;
	line-height: 36px;
	padding-bottom: 20px;
	@media screen and (max-width: 992px) {
		font-size: 30px;
		padding-bottom: 20px;
		line-height: 30px;
	}

	@media screen and (max-width: 576px) {
		font-size: 16px;
		padding-bottom: 10px;
		line-height: 20px;
	}
`;

export const InfoCarouselContainer = styled.div`
	padding: 20px 0;
	background-color: #f9ecef;
`;
