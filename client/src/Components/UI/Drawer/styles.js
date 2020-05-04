import styled from 'styled-components';

export const DrawerWrapper = styled.div`
	position: fixed;
	box-sizing: border-box;
	width: 300px;
	height: 100%;
	left: 0;
	top: 0;
	background-color: ${props => props.theme.whiteBackground};
	padding: 30px 20px;
	transition: left 0.3s ease-in;
	animation: show_drawer 0.3s ease-in;
	@keyframes show_drawer {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0%);
		}
	}
`;

export const DrawerContent = styled.div`
	font-size: 20px;
`;

export const DrawerHeading = styled.h3`
	font-size: 30px;
	font-weight: 900;
	margin-bottom: 30px;
	text-transform: uppercase;
`;
