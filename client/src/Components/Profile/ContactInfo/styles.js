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
`;

export const Form = styled.form`
	max-width: 768px;
	display: inline-flex;
	justify-content: center;
	flex-direction: column;

	@media (max-width: 768px) {
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
