import styled from 'styled-components';

export const Menu = styled.ul`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 15px 0 10px 0;

	@media (max-width: 900px) {
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 30px;
	}
`;

export const MenuItem = styled.li`
	font-weight: 600;
	text-transform: uppercase;
	color: ${props => props.theme.mainDark};
	text-decoration: none;
	cursor: pointer;

	&:not(:last-child) {
		@media (max-width: 900px) {
			margin-bottom: 15px;
		}
	}
`;
