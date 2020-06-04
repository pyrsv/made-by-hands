import styled from 'styled-components';

export const StyledButton = styled.button.attrs(props => ({
	disabled: props.disabled || props.styledDisabled,
}))`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	border-radius: 4px;
	font-size: 16px;
	min-width: 127px;
	min-height: 35px;
	cursor: ${({ disabled, styledDisabled }) =>
		styledDisabled || disabled ? 'not-allowed' : 'pointer'};
	width: ${props => (props.size === 'wide' ? '100%' : 'auto')};
	padding: 8px 12px;
	text-transform: ${props =>
		props.color === 'dark' ? 'uppercase' : 'titlecase'};
	font-weight: ${props => (props.color === 'dark' ? '600' : '500')};
	font-family: 'Raleway', sans-serif;
	background-color: ${props => {
		if (props.styledDisabled) {
			return '#16161c61';
		}
		return props.color === 'dark' ? props.theme.mainDark : 'transparent';
	}};
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

export const PreloaderContainer = styled.div`
	position: absolute;
	top: 53%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
