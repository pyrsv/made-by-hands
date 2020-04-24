import styled from 'styled-components';

export const StyledButton = styled.button`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	border-radius: 4px;
	font-size: 16px;
	min-width: 127px;
	cursor: pointer;
	width: ${props => (props.size === 'wide' ? '100%' : 'auto')};
	padding: 8px 12px;
	text-transform: ${props =>
		props.color === 'dark' ? 'uppercase' : 'titlecase'};
	font-weight: ${props => (props.color === 'dark' ? '600' : '500')};
	font-family: 'Raleway', sans-serif;
	background-color: ${props =>
		props.color === 'dark' ? props.theme.mainDark : 'transparent'};
	color: ${props =>
		props.color === 'dark'
			? props.theme.darkButtonColor
			: props.theme.mainDark};
	border: ${props =>
		props.color === 'dark' ? 'none' : `1px solid ${props.theme.mainDark}`};
	outline: none;
`;

export const Icon = styled.i`
	display: inline-block;
	position: relative;
	width: 16px;
	height: 16px;
	color: inherit;
	margin-left: 5px;
	bottom: -1px;
`;
