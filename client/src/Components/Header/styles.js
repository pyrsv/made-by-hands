import styled from 'styled-components';

export const StyledHeader = styled.header`
	font-family: 'Raleway', sans-serif;
	background-color: ${props => props.theme.lightPink};
	padding: 30px 0;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
export const Content = styled.div`
	padding-left: 50px;
	width: 75%;
`;

export const Info = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 10px 0 15px 0;
`;

export const Phone = styled.a`
	display: flex;
	align-items: center;
	color: ${props => props.theme.mainDark};
	text-decoration: none;
	font-size: 18px;
	font-weight: 400;
	font-family: 'Open Sans', sans-serif;
`;

export const PhoneIcon = styled.span`
	display: inline-block;
	margin-right: 7px;
	font-size: 20px;
`;
