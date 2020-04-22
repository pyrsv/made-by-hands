import styled from 'styled-components';

export const StyledTitle = styled.h1`
	padding-top: 60px;
	padding-bottom: 66px;
	display: flex;
	justify-content: center;
	font-size: 72px;
	letter-spacing: 0.08em;
	font-family: 'Raleway', sans-serif;
	font-weight: 900;
	text-transform: uppercase;
	color: ${props => props.theme.lightPink};
`;
