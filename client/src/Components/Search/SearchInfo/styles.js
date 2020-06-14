import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Info = styled.p`
	text-transform: uppercase;
	font-size: 24px;
	font-weight: 500;
	line-height: 36px;
	margin-bottom: 40px;

	@media (max-width: 576px) {
		font-size: 16px;
		line-height: 24px;
	}
`;

export const Query = styled.p`
	font-size: 36px;
	font-weight: 700;
	margin-bottom: 20px;

	@media (max-width: 576px) {
		font-size: 24px;
	}
`;

export const InfoAccent = styled.span`
	font-weight: 700;
`;

export const StyledLink = styled(NavLink)`
	color: ${props => props.theme.accentRed};
	text-decoration: underline !important;
`;

export const CategoriesList = styled.div`
	font-size: 20px;
	@media (max-width: 576px) {
		font-size: 14px;
	}
`;

export const Category = styled(NavLink)`
	text-transform: capitalize;
	margin-right: 11px;
`;

export const CategoryCount = styled.span`
	display: inline-block;
	margin-left: 3px;
	color: ${props => props.theme.accentRed};
`;
