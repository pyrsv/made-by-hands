import styled from 'styled-components';

export const StyledDescription = styled.div`
	justify-items: stretch;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	font-family: 'Raleway', sans-serif;
	text-align: justify;
	line-height: 35px;
	padding-bottom: 42px;
	color: ${props => props.theme.mainDark};
	@media (max-width: 576px) {
		display: flex;
		flex-direction: column;
	}
`;

export const StyledName = styled.h2`
	font-size: 20px;
	margin-bottom: 20px;
	font-weight: bold;
	@media (max-width: 576px) {
		display: flex;
		justify-content: center;
	}
`;

export const StyledText = styled.p`
	font-weight: 500;
	font-size: 16px;
	margin-bottom: 30px;
`;

export const StyledTextUl = styled.ul`
	list-style: disc;
	font-weight: 500;
	font-size: 16px;
	margin-bottom: 30px;
`;

export const StyledImagesContainer = styled.div`
	width: 400px;
	height: 300px;
	@media (max-width: 576px) {
		margin: 0 auto 30px;
	}
	@media (max-width: 762px) {
		width: 300px;
		height: 180px;
	}
	@media (max-width: 992px) {
		width: 320px;
		height: 200px;
	}
`;

export const StyledImagesContainerRight = styled.div`
	width: 400px;
	height: 300px;
	margin-left: auto;
	@media (max-width: 576px) {
		margin: 0 auto 30px;
	}
	@media (max-width: 762px) {
		width: 300px;
		height: 200px;
	}
	@media (max-width: 992px) {
		width: 320px;
		height: 200px;
	}
`;

export const StyledInfoContainer = styled.div`
	order: 1;
	@media (max-width: 576px) {
		order: 0;
	}
`;

export const StyledInfoContainerReverse = styled.div`
	order: 0;
	@media (max-width: 576px) {
		order: 1;
	}
`;

export const Images = styled.img`
	width: 100%;
	height: 100%;
`;
