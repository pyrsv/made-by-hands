import styled from 'styled-components';

export const CatalogContainer = styled.div`
	background-color: #ffffff;
	/* background-color: ${props => props.theme.lightPink}; */
`;

export const Content = styled.div`
	display: grid;
	grid-template-columns: 240px auto;
	margin-top: 30px;
	@media (max-width: 992px) {
		grid-template-columns: auto;
	}
	@media (max-width: 670px) {
	}
`;
