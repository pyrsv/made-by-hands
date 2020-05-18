import styled from 'styled-components';

export const CloseModalButton = styled.button`
	display: inline-block;
	position: absolute;
	top: 7%;
	right: 2%;
	font-weight: bold;
	background: ${props => props.theme.mainDark};
	border: none;
	outline: none;
	border-radius: 4px;
	color: ${props => props.theme.lightPink};
	margin-left: 20px;
`;
