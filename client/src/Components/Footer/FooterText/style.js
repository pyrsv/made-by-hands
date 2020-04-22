import styled from 'styled-components';

export const FooterTextDiv = styled.a`
	font-family: 'Raleway', sans-serif;
	font-size: ${props => (props.type === 'title' ? '18px' : '16px')};
	font-weight: ${props => (props.type === 'title' ? 'bold' : 'normal')};
	margin-bottom: ${props=>props.marginBottom};

	&:hover {
		cursor: ${props => (props.type === 'link' ? 'pointer' : 'default')};
	}
`;
