import styled from 'styled-components';

export const StyledBackdrop = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.4);
	backdrop-filter: blur(3px);
	z-index: 10;
`;
