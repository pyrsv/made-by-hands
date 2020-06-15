import styled from 'styled-components';

export const ModalWrapper = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background-color: ${props => props.theme.whiteBackground};
	min-width: 400px;
	padding: 20px 40px;
	box-sizing: border-box;
	border-radius: 4px;
	z-index: 999;
	@media (max-width: 576px) {
		min-width: 375px;
	}

	@media (max-width: 420px) {
		min-width: 300px;
	}
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;
`;

export const Content = styled.div``;

export const Title = styled.h3`
	font-weight: 700;
	font-size: 36px;
	text-transform: uppercase;
`;

export const Register = styled.p`
	margin-top: 45px;
	text-align: center;
	font-weight: 500;
	font-size: 14px;
`;

export const RegisterLink = styled.span`
	cursor: pointer;
	margin-left: 5px;
	color: ${props => props.theme.accentRed};
	&:hover {
		text-decoration: underline;
	}
`;
