import styled from 'styled-components';

export const StyledTitle = styled.h2`
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
	padding: 40px 0;

	@media (max-width: 768px) {
		font-size: 48px;
		line-height: 56px;
		padding: 20px 0;
	}

	@media (max-width: 420px) {
		font-size: 36px;
		line-height: 40px;
	}
`;
