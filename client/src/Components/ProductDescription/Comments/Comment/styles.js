import styled from 'styled-components';

export const InfoUserRating = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;
	@media screen and (max-width: 576px) {
		margin-bottom: 10px;
	}
`;

export const CommentContainer = styled.div`
	border: 1px solid grey;
	padding: 10px;
	border-radius: 20px;
	margin-bottom: 10px;
	@media screen and (max-width: 576px) {
		border-radius: 15px;
	}
	@media screen and (max-width: 480px) {
		border-radius: 10px;
		padding: 5px;
	}
`;

export const UserName = styled.p`
	font-weight: bold;
	font-size: 18px;
	align-self: center;
	@media screen and (max-width: 768px) {
		font-size: 16px;
	}
`;

export const CommentContent = styled.p`
	@media screen and (max-width: 480px) {
		font-size: 16px;
	}
`;
