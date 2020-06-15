import styled from 'styled-components';

export const FormFields = styled.div`
	margin-bottom: 35px;
	position: relative;
`;

export const StyledForm = styled.form`
	position: relative;
	margin-bottom: ${props => (props.type === 'register' ? '45px' : 0)};
`;
