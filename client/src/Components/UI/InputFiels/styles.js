import styled from 'styled-components';

export const InputContainer = styled.div`
	position: relative;
	font-family: 'Raleway', sans-serif;
	margin-bottom: ${props => (props.target === 'form' ? '20px' : 0)};
`;

export const Input = styled.input`
	display: inline-block;
	border: 1px solid #16161c;
	box-sizing: border-box;
	border-radius: 4px;
	padding: 6px 12px;
	font-family: Raleway;
	font-size: 16px;
	outline: none;
	background-color: transparent;
	width: 100%;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
`;

export const ErrorMessage = styled.span`
	position: absolute;
	left: 0;
	bottom: -15px;
	font-size: 14px;
	color: ${props => props.theme.accentRed};
`;
