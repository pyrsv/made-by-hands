import styled from 'styled-components';

export const Comments = styled.span`
	font-size: 20px;
	align-self: center;
	font-family: 'Open Sans', sans-serif;
	padding-left: 20px;
	@media screen and (max-width: 992px) {
		font-size: 18px;
	}
	@media screen and (max-width: 768px) {
		font-size: 16px;
		padding-left: 10px;
	}
	@media screen and (max-width: 576px) {
		font-size: 14px;
	}
	@media screen and (max-width: 480px) {
		font-size: 10px;
		padding-left: 5px;
	}
`;

export const RatingDiv = styled.div`
	display: flex;
	padding-bottom: 15px;
	@media screen and (max-width: 576px) {
		padding-bottom: 10px;
	}
`;
