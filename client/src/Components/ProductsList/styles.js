import styled from 'styled-components';

export const ProductsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 20px;
	padding-bottom: 40px;

	@media (max-width: 992px) {
		grid-gap: 15px;
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 10px;
	}

	@media (max-width: 576px) {
		grid-template-columns: auto;
		grid-gap: 30px;
	}
`;

export const ProductsPreloader = styled.div`
	padding: 25px 0;
	text-align: center;
`;
