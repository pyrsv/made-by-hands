import styled from 'styled-components';

export const Menu = styled.ul`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0 10px 0;
`;

export const MenuItem = styled.li`
	font-weight: 600;
	font-size: 16px;
	text-transform: uppercase;
	color: ${props => props.theme.mainDark};
	text-decoration: none;
	cursor: pointer;
`;
