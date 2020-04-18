import styled from 'styled-components';

export const Container = styled.ul`
	display: flex;
	justify-content: space-between;
`;

export const UserNavItem = styled.li`
	display: flex;
	align-items: center;
	font-weight: 600;
	font-size: 16px;
	text-transform: uppercase;
	&:not(:last-child) {
		margin-right: 25px;
	}
`;

export const UserNavIcon = styled.span`
	display: inline-block;
	margin-right: 7px;
	font-size: 22px;
	color: ${props => {
		return props.accent ? props.theme.accentRed : props.theme.mainDark;
	}};
`;
