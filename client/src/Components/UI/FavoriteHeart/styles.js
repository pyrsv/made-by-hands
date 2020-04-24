import styled from 'styled-components';


export const HeartWrapper = styled.div`
	width: 32px;
	height: 32px;
	font-size: 32px;
	color: #fd3018;
	transition: all 0.3s ease;
	&:hover {
		filter: drop-shadow(0px 0px 2px rgba(255, 0, 0, 0.5));
	}
`;