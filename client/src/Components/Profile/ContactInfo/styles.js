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

	@media (max-width: 998px) {
		flex-direction: column;
	}
`;

export const Form = styled.form`
	display: inline-block;
	position: relative;
	max-width: 768px;
	@media (max-width: 768px) {
		max-width: initial;
	}

	@media (max-width: 576px) {
		margin-bottom: 40px;
		width: 100%;
	}
`;

export const FormColumn = styled.div`
	width: 280px;

	@media (max-width: 998px) {
		width: 300px;
	}

	@media (max-width: 768px) {
		width: 260px;
	}

	@media (max-width: 576px) {
		width: 100%;
	}

	&:last-child {
		margin-left: 30px;

		@media (max-width: 998px) {
			margin: 0;
		}
	}
`;

export const ErrorContainer = styled.div`
	position: absolute;
	bottom: -20px;
`;

export const FormsGridConrainer = styled.div`
	display: grid;
	grid-template-columns: minmax(max-content, 500px) 1fr;
	justify-items: center;
	grid-column-gap: 30px;

	@media (max-width: 998px) {
		width: 300px;
		justify-items: start;
	}

	@media (max-width: 768px) {
		justify-items: start;
		grid-column-gap: 15px;
	}

	@media (max-width: 576px) {
		grid-template-columns: 1fr;
		width: 100%;
	}
`;
