import styled from 'styled-components';

export const Image = styled.img`
	width: 100%;
	height: 100%;
`;

export const StyledTextContainer = styled.div`
	width: 50%;
	@media (max-width: 576px) {
		width: 80%;
	}
`;

export const Name = styled.p`
	font-style: normal;
	font-weight: bold;
	font-size: 24px;
	line-height: 35px;
	margin-bottom: 30px;
	@media (max-width: 576px) {
		margin-top: 50px;
		text-align: center;
	}
`;

export const Text = styled.p`
	font-style: normal;
	font-weight: 600;
	font-size: 16px;
	line-height: 35px;
	margin-bottom: 30px;
	text-align: justify;
`;

export const GridContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 65px 0;
	@media (max-width: 576px) {
		flex-direction: column;
		align-items: center;
	}
`;

export const StyledImageContainer = styled.div`
	width: 400px;
	height: 300px;
	@media (max-width: 576px) {
		order: -1;
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
