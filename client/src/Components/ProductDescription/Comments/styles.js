import styled from 'styled-components';

export const CommentTitle = styled.p`
	font-size: 20px;
	padding-bottom: 20px;
	@media screen and (max-width: 768px) {
		font-size: 18px;
		padding-bottom: 15px;
	}

	@media screen and (max-width: 576px) {
		padding-bottom: 10px;
	}
`;
