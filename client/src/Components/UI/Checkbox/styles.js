import styled from 'styled-components';

export const CheckboxContainer = styled.div`
	&:not(:last-child) {
		display: block;
		margin-bottom: 10px;
	}
`;
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	border: 0;
	clip: rect(0 0 0 0);
	clippath: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;

export const DefaultCheckbox = styled.div`
	display: inline-block;
	box-sizing: border-box;
	width: 18px;
	height: 18px;
	border: 1px solid ${props => props.theme.mainDark};
	box-shadow: inset 0 0 0 2px ${props => props.theme.lightPink};
	background: ${props =>
		props.checked ? props.theme.mainDark : 'transparent'};
	border-radius: 3px;
	transition: all 150ms;
	margin-right: 7px;
	margin-bottom: 1px;
`;

export const ColorCheckbox = styled.div`
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	width: 20px;
	height: 20px;
	border-radius: 100%;
	border: 1px solid ${props => props.theme.mainDark};
	background-color: ${props => props.cssValue};
	margin-right: 7px;

	&:before {
		content: '';
		position: absolute;
		display: ${props => (props.checked ? 'block' : 'none')};
		border-radius: 100%;
		width: 13px;
		height: 13px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 1px solid ${props => props.theme.lightPink};
		background-color: rgba(0, 0, 0, 0.2);
	}
`;

export const Label = styled.label`
	display: flex;
	align-items: center;
	cursor: pointer;
	text-transform: capitalize;
	font-size: 18px;
`;
