import styled from 'styled-components';

export const Step = styled.div`
	display: flex;
	align-items: ${props =>
		props.alignItems === 'baseline' ? 'baseline' : 'center'};
	flex-direction: column;
	height: ${props => props.height};
	width: ${props => props.width};
	justify-content: space-evenly;
	min-height: ${props => props.minHeight};
	margin-bottom: ${props => props.marginBottom};
	padding: ${props => props.padding};
	background: #f9ecef;
	background-image: ${props => props.backgroundImg};
	background-position: ${props => props.backgroundPoss};
	@media (max-width: 900px) {
		align-items: center;
		padding: 1%;
		min-height: 110px;
	}
`;

export const IconSocNet = styled.a`
	height: 30px;
	width: ${props => (props.width ? props.width : '30px')};
	margin: 3px;
	cursor: pointer;
	background-image: ${props => props.backgroundImg};
	background-position: ${props => props.backgroundPoss};
	background-size: ${props => props.backgroundSize};
	background-repeat: ${props => props.backgroundRepeat};
`;

export const FooterContainer = styled.section`
	display: flex;
	align-items: center;
	flex-direction: row;
	justify-content: space-between;
	height: ${props => props.height};
	width: ${props => props.width};

	@media (max-width: 900px) {
		flex-wrap: wrap;
	}

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const FootLine = styled.div`
	width: 100vw;
	border-top: 2px solid #e5e5e5;
	margin-bottom: 20px;
<<<<<<< HEAD

	@media (max-width: 900px) {
		margin-bottom: 10px;
	}
=======
>>>>>>> develop
`;
