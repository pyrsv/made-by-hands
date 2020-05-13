import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Address = styled.li`
	position: relative;
	box-sizing: border-box;

	width: 320px;
	padding: 25px;
	border: 1px solid ${props => props.theme.accentRed};
	border-radius: 4px;

	&:not(:last-child) {
		margin-bottom: 30px;
	}

	@media (max-width: 576px) {
		width: 280px;
	}
`;

export const AddressText = styled.p`
	font-weight: 500;
	font-size: 13px;
`;

export const EditLink = styled(NavLink)`
	color: ${props => props.theme.accentRed} !important;
	font-weight: 500;
	font-size: 13px;
	text-decoration: underline;
`;

export const DeleteBtnContainer = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
`;
