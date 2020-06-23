import styled from 'styled-components';

export const StyledForm = styled.form`
	position: relative;
`;

export const FormFields = styled.div`
	margin-bottom: 35px;
	position: relative;
`;

export const StyledForm = styled.form`
	position: relative;
	margin-bottom: ${props => (props.type === 'register' ? '45px' : 0)};
`;

export const ErrorContainer = styled.div`
	position: absolute;
	bottom: -20px;
`;

export const StyledRegisterForm = styled(StyledForm)`
	margin-bottom: 30px;
`;
