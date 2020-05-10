import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import LoginForm from './Forms/LoginForm';
import RegisterForm from './Forms/RegisterForm';
import CloseButton from '../UI/CloseButton/CloseButton';
import Backdrop from '../UI/Backdrop/Backdrop';
import { closeNav } from '../../store/actions/UIActions';
import {
	Content,
	Title,
	ModalWrapper,
	Header,
	Register,
	RegisterLink,
} from './styles';

const AuthModal = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [form, setForm] = useState({ login: true });

	useEffect(() => {
		dispatch(closeNav());
	});

	const handleFormChange = () => {
		setForm({ ...form, login: !form.login });
	};

	const handeleModalClose = () => history.goBack();

	return (
		<>
			<ModalWrapper>
				<Header>
					<Title>Login</Title>
					<CloseButton onClick={handeleModalClose} />
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
			<Backdrop onClick={handeleModalClose} />
		</>
	);
};

export default AuthModal;
