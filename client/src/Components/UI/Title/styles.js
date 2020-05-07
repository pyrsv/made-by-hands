import styled from 'styled-components';

export const StyledTitle = styled.span`
	color: ${props => {
		return props.color === 'dark'
			? props.theme.mainDark
			: props.theme.lightPink;
	}};
	text-transform: uppercase;
	font-family: Raleway, sans-serif;
	font-style: normal;
	font-weight: 900;
	font-size: 72px;
	line-height: 85px;
	letter-spacing: 0.08em;

	@media (max-width: 768px) {
		font-size: 48px;
	}
`;
