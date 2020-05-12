import styled from 'styled-components';

export const Ul = styled.ul`
	display: flex;
	font-family: 'Open Sans', sans-serif;
`;

export const Li = styled.li`
	padding: 10px 10px;
	@media screen and (max-width: 768px) {
		padding: 7px 7px;
	}
	@media screen and (max-width: 480px) {
		padding: 5px 5px;
	}
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: center;
	position: relative;
`;

export const Button = styled.button`
	border: none;
	background: none;
	cursor: pointer;
`;

export const Link = styled.a`
	cursor: pointer;

	@media screen and (max-width: 480px) {
		font-size: 14px;
	}
`;
