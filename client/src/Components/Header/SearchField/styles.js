import styled from 'styled-components';

export const SearchForm = styled.form`
	position: relative;

	@media (max-width: 900px) {
		position: absolute;
		top: 90px;
		right: 15px;
		background-color: ${props => props.theme.lightPink};
		width: 80%;
	}
`;

export const SearchButton = styled.button.attrs(() => ({ type: 'submit' }))`
	position: absolute;
	box-sizing: border-box;
	height: 100%;
	width: 41px;
	right: 0;
	top: 0;
	border: 1px solid ${props => props.theme.mainDark};
	border-top-right-radius: 4px;
	border-bottom-right-radius: 4px;
	background-color: transparent;
	outline: none;
`;
