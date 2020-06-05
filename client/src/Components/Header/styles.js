import styled from 'styled-components';

export const StyledHeader = styled.header`
	position: relative;
	font-family: 'Raleway', sans-serif;
	background-color: ${props => props.theme.lightPink};
	padding: 30px 0;

	@media (max-width: 992px) {
		padding: 17px 0;
	}
	@media (max-width: 576px) {
		padding: 12px 0;
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 992px) {
		display: grid;
		grid-template-columns: 80px 1fr 80px;
		align-items: center;
		justify-items: center;
	}
`;
export const Content = styled.div`
	padding-left: 50px;
	width: 80%;
	font-size: 16px;

	@media (max-width: 1085px) {
		padding-left: 30px;

		width: 85%;
	}

	@media (max-width: 992px) {
		font-size: 14px;
	}
`;

export const Info = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0 15px 0;

	@media (max-width: 992px) {
		font-size: 16px;
	}
`;

export const Phone = styled.a`
	display: flex;
	align-items: center;
	color: ${props => props.theme.mainDark};
	text-decoration: none;
	font-size: 18px;
	font-weight: 400;
	font-family: 'Open Sans', sans-serif;
	@media (max-width: 992px) {
		margin-top: 40px;
		font-size: 18px;
	}
`;

export const PhoneIcon = styled.span`
	display: inline-block;
	margin-right: 7px;
`;

export const HamburgerWrapper = styled.div`
	position: relative;
	z-index: 50;
	left: 0;
	transition: 0.3s ease-in;
	justify-self: start;
`;
