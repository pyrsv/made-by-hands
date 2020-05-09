import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.div``;

export const Nav = styled.ul`
	display: flex;
	border-bottom: 1px solid ${props => props.theme.mainDark};
`;

export const NavItem = styled.li`
	&:not(:last-child) {
		margin-right: 30px;
	}
`;

export const StyledNavLink = styled(NavLink)`
	position: relative;
	display: inline-block;
	padding: 14px 0;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 14px;

	&.active {
		&:after {
			content: '';
			position: absolute;
			left: 0;
			bottom: -2px;
			width: 100%;
			height: 3px;
			background-color: ${props => props.theme.accentRed};
		}
	}
`;
