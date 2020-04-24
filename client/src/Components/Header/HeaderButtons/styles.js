import styled from 'styled-components';

export const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
`;

export const IconLink = styled.span`
	font-size: 32px;

	&:not(:last-child) {
		margin-right: 25px;

		@media (max-width: 576px) {
			font-size: 24px;
			margin-right: 10px;
		}
	}

	@media (max-width: 576px) {
		font-size: 24px;
	}
`;
