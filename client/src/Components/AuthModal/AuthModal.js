import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './Forms/LoginForm';
import RegisterForm from './Forms/RegisterForm';
import CloseButton from '../UI/CloseButton/CloseButton';
import Backdrop from '../UI/Backdrop/Backdrop';
import {
	Content,
	Title,
	ModalWrapper,
	Header,
	Register,
	RegisterLink,
} from './styles';

const AuthModal = ({ onToggle }) => {
	const [form, setForm] = useState({ login: true });

	const handleFormChange = () => {
		setForm({ ...form, login: !form.login });
	};

	return (
		<>
			<ModalWrapper>
				<Header>
					<Title>Login</Title>
					<CloseButton onClick={onToggle} />
				</Header>
				<Content>
					{form.login ? (
						<>
							<LoginForm />
							<Register>
								No Account?
								<RegisterLink role="button" onClick={handleFormChange}>
									Register
								</RegisterLink>
							</Register>
						</>
					) : (
						<RegisterForm />
					)}
				</Content>
			</ModalWrapper>
			<Backdrop onClick={onToggle} />
		</>
	);
};

AuthModal.propTypes = {
	onToggle: PropTypes.func.isRequired,
};

export default AuthModal;
