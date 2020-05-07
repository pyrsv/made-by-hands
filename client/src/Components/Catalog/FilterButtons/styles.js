import styled from 'styled-components';

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: flex-end;

	@media (max-width: 670px) {
		justify-content: flex-start;
	}
`;

export const FilterButton = styled.button`
	background: transparent;
	border: 1px solid ${props => props.theme.mainDark};
	border-radius: 4px;
	padding: 5px 10px;
	font-size: 18px;
	cursor: pointer;
	outline: none;

	&:first-child {
		display: none;
		margin-right: 15px;

		@media (max-width: 670px) {
			display: inline-block;
		}
	}
`;

export const FilterIcon = styled.span`
	font-size: 18px;
	margin-right: 7px;
`;

export const SelectContainer = styled.div`
	min-width: 200px;
`;
