import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NoMatchPlaceholder = styled.p`
	font-size: 24px;
	line-height: 28px;
	margin-bottom: 15px;
`;

export const StyledLink = styled(NavLink)`
	text-decoration: underline !important;
	font-weight: 500;
`;
