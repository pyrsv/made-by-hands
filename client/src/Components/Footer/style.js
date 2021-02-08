import styled from 'styled-components';

export const Wrapper = styled.div`
	background: #f9ecef;
	overflow: hidden;
`;

export const TitleFooterText = styled.h2`
	font-size: 16px;
	font-weight: bold;
`;

export const FooterContainer = styled.section`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;

	@media (max-width: 992px) {
		flex-wrap: wrap;
		justify-content: space-around;
	}
`;

export const FooterSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1vh;
	justify-content: space-evenly;
	min-height: 30vh;

	@media (max-width: 992px) {
		min-height: 25vh;
	}
	@media (max-width: 576px) {
		min-height: 20vh;
	}
`;

export const IconSocNet = styled.a`
	height: 30px;
	width: ${props => (props.width ? props.width : '30px')};
	margin: 3px;
	cursor: pointer;
	background-image: url('./social-icons-png-vk-4.png');
	background-position: ${props => props.backgroundPoss};
	background-repeat: no-repeat;
`;

export const IconPay = styled.a`
	height: 30px;
	width: 180px;
	margin: 3px;
	cursor: pointer;
	background-size: cover;
	background-image: url('https://edanadom.sumy.ua/assets/images/online.png');
	background-repeat: no-repeat;
`;

export const FootLine = styled.div`
	width: 100vw;
	border-top: 2px solid #e5e5e5;
	margin-bottom: 20px;

	@media (max-width: 992px) {
		margin-bottom: 10px;
	}
`;
