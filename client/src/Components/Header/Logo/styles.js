import styled from 'styled-components';

export const StyledLogo = styled.span`
	display: inline-block;
	font-size: 42px;
	font-family: 'Raleway', sans-serif;
	font-weight: 900;
	text-transform: uppercase;
	color: ${props => props.theme.maindark};
	width: 20%;
	@media (max-width: 1030px) {
		width: 15%;
		font-size: 30px;
	}
	@media (max-width: 900px) {
		width: auto;
	}
	@media (max-width: 576px) {
		font-size: 24px;
	}
`;

export const LogoAccent = styled.span`
	color: ${props => props.theme.accentRed};
`;
