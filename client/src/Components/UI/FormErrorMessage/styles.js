import styled from 'styled-components';

export const Message = styled.span`
	display: inline-block;
	font-size: 14px;
	color: ${props => props.theme.accentRed};
	position: absolute;
	left: 0;
	bottom: -20px;
`;
