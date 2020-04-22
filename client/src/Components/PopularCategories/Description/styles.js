import styled from 'styled-components';

export const StyledDescription = styled.div`
	justify-items: stretch;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	font-family: 'Raleway', sans-serif;
	text-align: left;
	line-height: 35px;
	color: ${props => props.theme.mainDark};
`;

export const StyledTextRight = styled.div`
	margin-left: 86px;
`;

export const StyledName = styled.h2`
	font-size: 20px;
	margin-bottom: 20px;
	font-weight: bold;
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
	margin-bottom: 41px;
`;

export const StyledImagesContainerRight = styled.div`
	margin: 0 auto;
	width: 400px;
	height: 300px;
	margin-bottom: 41px;
`;

export const StyledImages = styled.img`
	width: 100%;
	height: 100%;
`;
