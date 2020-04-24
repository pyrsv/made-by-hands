import styled from 'styled-components';

export const Container = styled.ul`
	display: flex;
	justify-content: space-between;
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

export const UserNavItem = styled.li`
	display: flex;
	align-items: center;
	font-weight: 600;
	text-transform: uppercase;
	cursor: pointer;
	outline: none;

	&:not(:last-child) {
		margin-right: 25px;

		@media (max-width: 992px) {
			margin-right: 15px;
		}
	}
	@media (max-width: 900px) {
		margin-bottom: 20px;
		align-items: flex-start;
	}
`;

export const UserNavIcon = styled.span`
	display: inline-block;
	margin-right: 7px;
	font-size: 22px;
	color: ${props => {
		return props.accent ? props.theme.accentRed : props.theme.mainDark;
	}};
	@media (max-width: 992px) {
		font-size: 16px;
	}
`;
