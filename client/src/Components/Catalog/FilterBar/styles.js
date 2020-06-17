import styled from 'styled-components';

export const FilterWrapper = styled.div`
	margin-right: 15px;
`;

export const FiltersContainer = styled.div`
	align-self: start;
	/* border: 1px solid ${props => props.theme.mainDark}; */
	border-radius: 4px;
	padding: 10px 10px 60px 10px;
`;

export const Title = styled.h3`
	font-size: 42px;
	font-weight: 500;
	@media (max-width: 992px) {
		font-size: 36px;
	}
`;

export const FilterName = styled.h4`
	font-size: 28px;
	margin-bottom: 15px;
	@media (max-width: 992px) {
		font-size: 22px;
	}
`;

export const FilterGroup = styled.div`
	padding: 15px 0;
`;
