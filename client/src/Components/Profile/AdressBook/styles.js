import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div``;

export const AdressList = styled.ul``;

export const NewAdressContainer = styled.div`
	box-sizing: border-box;
	width: 320px;
	padding: 25px;
	border: 1px solid ${props => props.theme.accentRed};
	border-radius: 4px;

	@media (max-width: 576px) {
		width: 280px;
	}
`;

export const NewAdressLink = styled(NavLink)`
	font-weight: 600;
	font-size: 16px;
	text-decoration: underline !important;
`;

export const Placeholder = styled.p`
	font-weight: 600;
	font-size: 48px;
	text-align: center;
	margin-bottom: 40px;

	@media (max-width: 768px) {
		font-size: 36px;
	}
`;
