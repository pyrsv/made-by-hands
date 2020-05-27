import styled from 'styled-components';

export const ParamText = styled.p`
	font-weight: 500;
	display: inline-block;
	padding-bottom: 5px;
	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;

export const Li = styled.li`
	list-style-type: disc;
	font-weight: 500;
	list-style-position: inside;
	margin-top: 5px;
	font-family: 'Open Sans', sans-serif;
	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
	@media screen and (max-width: 480px) {
		line-height: 15px;
	}
`;
