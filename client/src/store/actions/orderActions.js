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
	user
) => dispatch => {
	dispatch(placeOrderInit);

	if (!user._id) {
		axios
			.post('/orders', {
				email: `${values.email}`,
				mobile: `${values.phone}`,
				deliveryAddress: JSON.stringify(delivery),
				shipping: JSON.stringify(shippingInfo),
				status: 'pending',
				letterSubject: 'Thank you for order! You are welcome!',
				letterHtml:
					'<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>',
				firstName: `${values.firstName}`,
				lastName: `${values.lastName}`,
				products: JSON.stringify(values.items),
			})
			.then(res => {
				// eslint-disable-next-line no-console
				console.log(res.data);
				if (res.data.order) {
					placeOrderSuccess(res.data.order.orderNo);
				} else {
					// eslint-disable-next-line no-alert
					alert(res.data.message);
				}
			})
			.catch(err => {
				placeOrderFail(err.message);
			});
	} else {
		axios
			.post('/orders', {
				customerId: `${user._id}`,
				email: `${values.email}`,
				mobile: `${values.phone}`,
				deliveryAddress: JSON.stringify(delivery),
				shipping: JSON.stringify(shippingInfo),
				status: 'pending',
				letterSubject: 'Thank you for order! You are welcome!',
				letterHtml:
					'<h1>Your order is placed. OrderNo is 023689452.</h1><p>{Other details about order in your HTML}</p>',
				firstName: `${values.firstName}`,
				lastName: `${values.lastName}`,
				products: JSON.stringify(values.items),
			})
			.then(res => {
				// eslint-disable-next-line no-console
				console.log(res.data);
				if (res.data.order) {
					placeOrderSuccess(res.data.order.orderNo);
				} else {
					// eslint-disable-next-line no-alert
					alert(res.data.message);
				}
			})
			.catch(err => {
				placeOrderFail(err.message);
			});
	}
};
