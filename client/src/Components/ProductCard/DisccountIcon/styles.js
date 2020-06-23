import styled from 'styled-components';

export const StyledDiscount = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 60px;
	height: 60px;
	right: 10px;
	top: 10px;
	border-radius: 50%;
	background-color: ${props => props.theme.accentRed};
  /* border: 2px solid ${props => props.theme.accentRed}; */
	font-size: 18px;
  color: #ffffff;
  font-weight: 700;
	vertical-align: middle;
`;
