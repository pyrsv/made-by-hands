import styled from 'styled-components';

export const TextareaContainer = styled.div`
	font-family: 'Raleway', sans-serif;
	margin-bottom: ${props => (props.target === 'form' ? '15px' : 0)};
`;

export const Textarea = styled.textarea`
	display: inline-block;
	border: 1px solid #16161c;
	box-sizing: border-box;
	border-radius: 4px;
	padding: 6px 12px;
	font-family: Raleway;
	font-size: 16px;
	outline: none;
	background-color: transparent;
	width: 100%;
	resize: none;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 5px;
`;
