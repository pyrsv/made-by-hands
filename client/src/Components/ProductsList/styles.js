import styled from 'styled-components';

export const ProductsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	padding: 0 20px;

	@media (max-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 15px;
		padding: 0 15px;
	}

	@media (max-width: 576px) {
		grid-template-columns: auto;
		grid-gap: 30px;

		padding: 0 15px;
	}
`;
