import styled from 'styled-components';

export const ParamText = styled.p`
	font-weight: 500;
	display: inline-block;
	padding-bottom: 10px;
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

export const Li = styled.li`
	list-style-type: circle;
	font-weight: 500;
	list-style-position: inside;
	margin-top: 10px;
	font-family: 'Open Sans', sans-serif;
	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
	@media screen and (max-width: 576px) {
		font-size: 12px;
	}
`;
