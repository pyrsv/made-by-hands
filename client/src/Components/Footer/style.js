import styled from 'styled-components';

export const Foot = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	background: #f9ecef;
	justify-content: space-evenly;
	min-height: ${props => props.height};
	@media (max-width: 640px) {
		background: red;
  }
`;

export const FooterContainer = styled.section`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	height: ${props => props.height};
`;

export const FootLine = styled.div`
	width: 100%;
	border-top: 2px solid #e5e5e5;
	margin-bottom:20px;
`;
