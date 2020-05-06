import styled from 'styled-components';

export const FiltersWrapper = styled.div`
	padding: 15px 0;
`;

export const FiltersName = styled.h4`
	font-size: 28px;
	margin-bottom: 15px;
	@media (max-width: 992px) {
		font-size: 22px;
	}
`;

export const CheckboxesWrapper = styled.div`
	position: relative;
	min-height: 80px;
`;

export const PreloaderContainer = styled.div`
	position: absolute;
	padding: 15px 0;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;
