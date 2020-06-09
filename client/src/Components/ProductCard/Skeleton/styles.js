import styled from 'styled-components';

const SkeletonPulse = styled.div`
	display: inline-block;
	height: 100%;
	width: 100%;
	background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
	background-size: 400% 400%;
	animation: pulse 1.2s ease-in-out infinite;
	@keyframes pulse {
		0% {
			background-position: 0% 0%;
		}
		100% {
			background-position: -135% 0%;
		}
	}
`;

export const Wrapper = styled.div`
	height: 409px;
	border-radius: 4px;
`;

export const SkeletonImage = styled(SkeletonPulse)`
	width: 100%;
	height: 315px;
	margin-bottom: 15px;

	@media (max-width: 992px) {
		height: 285px;
	}
`;

export const SkeletonLine = styled(SkeletonPulse)`
	height: 24px;
	width: ${props => props.width};
	margin-bottom: 15px;
	border-radius: 8px;
`;
