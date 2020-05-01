import { SET_CART } from '../types/cartTypes';
// import axios from 'axios';
// import setAuthToken from '../../utils/setAuthToken';
// import { handleGetUser } from '../../utils/API';
// eslint-disable-next-line import/no-cycle
// import { userLoginSuccess, userLoginError } from './authActions'

export const setCartAction = data => ({
	type: SET_CART,
	payload: data,
});

// export const addToCartActionCreator = id => dispatch=> {
//     const token = localStorage.getItem('token');
// 	if (token) {
// 		setAuthToken(token);
// 		handleGetUser(token)
//         .then(customer => {

//             axios.post(`/cart + ${id}`).then(result => {
//                 console.log(result.data)
//             });
//             dispatch(userLoginSuccess(customer.data));
//         })
//         .catch(err => {
//             if (!localStorage.getItem('cart')) {
//                 localStorage.setItem('cart', '[]');
//             }
//             dispatch(setCartAction(localStorage.getItem('cart')));
//             dispatch(userLoginError(err));
//         });
//     }
// }
