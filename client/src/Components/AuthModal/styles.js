import styled from 'styled-components';

export const Backdrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(3px);
	z-index: 10;
`;

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
	z-index: 20;
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
