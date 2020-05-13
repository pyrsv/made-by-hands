import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import LoginForm from './Forms/LoginForm';
import RegisterForm from './Forms/RegisterForm';
import CloseButton from '../UI/CloseButton/CloseButton';
import Backdrop from '../UI/Backdrop/Backdrop';
import querystring from 'query-string';
import { closeNav } from '../../store/actions/UIActions';
import { setProductToWishlist } from '../../store/actions/catalogActions';
import { addToWishlist } from '../../store/actions/wishActions';
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
	const location = useLocation();
	const dispatch = useDispatch();
	const user = useSelector(state => state.auth.currentUser);
	const { addtowishlist: wishlistId } = querystring.parse(location.search);
	const isFirstRun = useRef(true);
	const [form, setForm] = useState({ login: true });
	const { from } = location.state;

	useEffect(() => {
		dispatch(closeNav());
	}, []);

	useEffect(() => {
		if (isFirstRun.current) {
			isFirstRun.current = false;
			return;
		}
		if (location) {
			dispatch(setProductToWishlist(wishlistId));
			dispatch(addToWishlist(wishlistId));
		}

		if (from) {
			history.replace(from);
		} else {
			history.goBack();
		}
	}, [user]);

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
