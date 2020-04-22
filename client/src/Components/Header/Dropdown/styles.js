import styled from 'styled-components';

export const DropdownWrapper = styled.div`
	display: inline-block;
	position: relative;
`;

export const DropdownHeading = styled.span`
	cursor: pointer;
	outline: none;
`;

export const DropdownList = styled.ul`
	min-width: 150px;
	position: absolute;
	background-color: ${props => props.theme.whiteBackground};
	padding: 20px;
	z-index: 10;
	top: 30px;
	left: 0;
	border-radius: 4px;
`;

export const DropdownItem = styled.li`
	font-weight: 600;
	line-height: 18px;

	&:not(:last-child) {
		margin-bottom: 20px;
	}
`;
