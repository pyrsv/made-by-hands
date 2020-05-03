import styled from 'styled-components';

export const FooterTextDiv = styled.a`
	font-family: 'Raleway', sans-serif;
	font-weight: ${props => (props.type === 'title' ? '600' : 'normal')};
	margin: 5px;
	text-align: center;

	@media (max-width: 992px) {
		margin: 3px;
	}

	&:hover {
		cursor: ${props => (props.type === 'link' ? 'pointer' : 'default')};
	}
`;
