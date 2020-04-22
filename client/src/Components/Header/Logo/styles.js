import styled from 'styled-components';

export const StyledLogo = styled.span`
	display: inline-block;
	font-size: 42px;
	font-family: 'Raleway', sans-serif;
	font-weight: 900;
	text-transform: uppercase;
	color: ${props => props.theme.maindark};
	width: 25%;
`;

export const LogoAccent = styled.span`
	color: ${props => props.theme.accentRed};
`;
