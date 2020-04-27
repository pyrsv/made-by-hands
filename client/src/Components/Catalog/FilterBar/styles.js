import styled from 'styled-components';

export const FiltersContainer = styled.div`
	border: 1px solid ${props => props.theme.mainDark};
	border-radius: 4px;
	padding: 10px;
`;

export const Title = styled.h3`
	font-size: 42px;
	font-weight: 500;
`;

export const FilterName = styled.h4`
	font-size: 28px;
	margin-bottom: 15px;
`;

export const FilterGroup = styled.div`
	padding: 15px 0;
`;
