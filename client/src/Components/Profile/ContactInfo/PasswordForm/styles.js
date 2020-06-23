import styled from 'styled-components';

export const StyledForm = styled.form`
	position: relative;
	width: 300px;

	@media (max-width: 768px) {
		width: 260px;
	}

	@media (max-width: 576px) {
		width: 100%;
	}
`;

export const ErrorContainer = styled.div`
	position: absolute;
	bottom: -20px;
`;

export const Description = styled.p`
	font-weight: 600;
	font-size: 14px;
	margin-bottom: 30px;
`;
