import styled from 'styled-components';

export const Description = styled.p`
	font-weight: 600;
	font-size: 14px;
	margin-bottom: 30px;
`;

export const InfoWrapper = styled.div`
	margin-bottom: 30px;
`;

export const FieldsWrapper = styled.div`
	display: flex;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Form = styled.form`
	display: inline-block;
	max-width: 768px;
	@media (max-width: 768px) {
		max-width: initial;
	}
`;

export const FormColumn = styled.div`
	width: 280px;

	&:last-child {
		margin-left: 30px;

		@media (max-width: 768px) {
			margin: 0;
		}
	}
`;
