import styled from 'styled-components';

export const InputContainer = styled.div`
	position: relative;
	font-family: 'Raleway', sans-serif;
	margin-bottom: ${props => (props.target === 'form' ? '20px' : 0)};
`;

export const Input = styled.input`
	display: inline-block;
	border: 1px solid
		${props => (props.isInvalid ? props.theme.accentRed : props.theme.mainDark)};
	box-sizing: border-box;
	border-radius: 4px;
	padding: 6px 12px;
	font-family: Raleway;
	font-size: 16px;
	outline: none;
	background-color: transparent;
	width: 100%;
	box-shadow: inset 0 0 0 50px #fff;
	-webkit-text-fill-color: #000;
	transition: border-color 0.2s ease-in;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
`;

export const ErrorMessage = styled.span`
	position: absolute;
	left: 0;
	bottom: -17px;
	font-size: 14px;
	color: ${props => props.theme.accentRed};
	animation: show 0.2s ease-in;

	@keyframes show {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;
