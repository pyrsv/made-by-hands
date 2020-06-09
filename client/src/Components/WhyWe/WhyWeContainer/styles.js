import styled from 'styled-components';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-items: center;

	@media (max-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 762px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 576px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const Image = styled.div`
	width: 50px;
	height: 50px;
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	width: 100%;
	@media (max-width: 992px) {
		align-items: center;
		text-align: center;
	}
`;

export const Title = styled.p`
	font-size: 24px;
	font-weight: 600;
	text-transform: uppercase;
	padding: 16px 0;
`;
export const Text = styled.p`
	font-size: 16px;
	padding-bottom: 42px;
	line-height: 35px;
	font-weight: 600;
`;
