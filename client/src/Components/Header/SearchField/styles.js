import styled from 'styled-components';

export const SearchForm = styled.form`
	position: relative;

	@media (max-width: 992px) {
		position: fixed;
		top: 0;
		left: 0;
		background-color: ${props => props.theme.lightPink};
		width: 100%;
		z-index: 999;
	}
`;

export const SearchInput = styled.input.attrs({
	type: 'text',
})`
	display: inline-block;
	border: 1px solid ${props => props.theme.mainDark};
	box-sizing: border-box;
	border-radius: 4px;
	font-size: 16px;
	outline: none;
	width: 100%;
	font-family: Raleway;
	padding: 6px 12px;
	min-width: 240px;

	::placeholder {
		color: #c4c4c4;
	}

	@media (max-width: 992px) {
		padding: 20px 12px;
		font-size: 20px;
		border-radius: 0;
		border: 0;
		border-bottom: 1px solid ${props => props.theme.mainDark};
		padding-left: 50px;
	}

	@media (max-width: 576px) {
		padding: 14px 12px;
		padding-left: 35px;

		font-size: 16px;
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
	@media (max-width: 992px) {
		width: 60px;
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border: 0;
		border-left: 1px solid ${props => props.theme.mainDark};
	}
	@media (max-width: 576px) {
		width: 49px;
	}
`;

export const CloseButtonWrapper = styled.div`
	position: absolute;
	left: 15px;
	top: 48%;
	transform: translateY(-50%);

	@media (max-width: 576px) {
		left: 10px;
	}
`;
