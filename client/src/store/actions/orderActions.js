import axios from 'axios';
import {
	PLACE_ORDER_FAIL,
	PLACE_ORDER_SUCCESS,
	PLACE_ORDER_INIT,
} from '../types/ordersTypes';

const placeOrderInit = () => ({
	type: PLACE_ORDER_INIT,
});
export const placeOrderFail = err => ({
	type: PLACE_ORDER_FAIL,
	payload: err,
});
export const placeOrderSuccess = data => ({
	type: PLACE_ORDER_SUCCESS,
	payload: data,
});

export const placeOrder = (
	values,
	shippingInfo,
	delivery,
	payment
) => dispatch => {
	dispatch(placeOrderInit);
	axios
		.post('/orders', {
			products: `${values.items}`,
			shipping: JSON.stringify(shippingInfo),
			deliveryAddress: JSON.stringify(delivery),
			paymentInfo: JSON.stringify(payment),
			customerId: '5eabe5c2e00ab113f0cb0f1e',
			status: 'not shipped',
			email: `${values.email}`,
			mobile: `${values.phone}`,
			letterSubject: 'Thank you for order! You are welcome!',
			letterHtml:
				'<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>',
		})
		.then(res => {
			// eslint-disable-next-line no-console
			console.log(res.data);
			placeOrderSuccess(res.data.order.orderNo);
		})
		.catch(err => {
			placeOrderFail(err.response.data);
		});
};
