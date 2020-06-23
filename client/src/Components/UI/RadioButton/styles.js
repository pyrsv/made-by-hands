import styled from 'styled-components';

export const RadioWrapper = styled.div`
	display: block;
	position: relative;
	font-weight: 500;
	font-size: 16px;
	user-select: none;
`;

export const RadioCheck = styled.span`
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	margin-right: 18px;
	width: 15px;
	height: 15px;
	background-color: ${props =>
		props.checked ? props.theme.mainDark : 'transaprent'};
	border: 2px solid ${props => props.theme.mainDark};
`;

export const DefaultRadio = styled.input.attrs({ type: 'radio' })`
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
`;
