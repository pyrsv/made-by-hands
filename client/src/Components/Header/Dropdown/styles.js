import styled from 'styled-components';

export const DropdownWrapper = styled.div`
	display: inline-block;
	position: relative;
	@media (max-width: 900px) {
		overflow: hidden;
	}
`;

export const DropdownHeading = styled.span`
	cursor: pointer;
	outline: none;
	&::selection {
		color: none;
		background: none;
	}
`;

export const DropdownList = styled.ul`
	min-width: 150px;
	position: absolute;
	box-sizing: border-box;
	background-color: ${props => props.theme.whiteBackground};
	padding: 20px;
	z-index: 100;
	top: 30px;
	left: 0;
	border-radius: 4px;

	@media (max-width: 900px) {
		position: static;
		animation: 0.3s ease-out show_backdrop;
		@keyframes show_backdrop {
			0% {
				transform: translateY(-100%);
			}
			100% {
				transform: translateY0();
			}
		}
	}
`;

export const DropdownItem = styled.li`
	font-weight: 600;
	line-height: 18px;
	color: ${props => (props.accent ? props.theme.accentRed : 'inherit')};
	&:not(:last-child) {
		margin-bottom: 20px;
	}

	&::selection {
		color: none;
		background: none;
	}
`;
