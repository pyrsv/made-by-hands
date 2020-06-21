import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Title from '../UI/Title/title';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import CheckoutSumbit from './CheckoutSubmit/CheckoutSubmit';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import {} from './styles';

const Checkout = () => {
	const [isAddressDelivery, setAddressDelivery] = useState(false);
	const [isCheckoutSuccess, setCheckoutSuccess] = useState(false);
	const [orderNo, setOrderNo] = useState(null);
	const user = useSelector(state => state.auth.currentUser) || {};
	const products = useSelector(state => state.cartReducer.currentCart) || {};

	if (user && !user.address) {
		user.address = {};
	}

	const handleFormSubmit = values => {
		let checkoutData;
		if (!user._id) {
			checkoutData = {
				products: JSON.stringify(products),
				firstName: values.firstName,
				lastName: values.lastName,
			};
		} else {
			checkoutData = {
				customerId: user._id,
			};
		}
		checkoutData.mobile = values.telephone;
		checkoutData.email = values.email;
		checkoutData.postalDelivery = !isAddressDelivery
			? {
					city: values.delivery.deliveryCity,
					postalOffice: values.delivery.deliveryPoint,
			  }
			: null;
		checkoutData.deliveryAddress = isAddressDelivery
			? JSON.stringify({
					country: 'Ukraine',
					city: values.delivery.city,
					address: `${values.delivery.street} ${values.delivery.house}, fl.${values.delivery.app}`,
			  })
			: null;
		checkoutData.letterSubject = 'Thank you for order!';
		checkoutData.status = 'Pending';
		checkoutData.letterHtml =
			'<h1>Your order is placed. OrderNo is 023689452.</h1>';
		axios
			.post('/api/orders', checkoutData)
			.then(res => {
				setOrderNo(res.data.order.orderNo);
				setCheckoutSuccess(true);
			})
			.catch(err => err);
	};

	return (
		<LayoutContainer>
			{isCheckoutSuccess ? (
				<CheckoutSumbit orderNo={orderNo} />
			) : (
				<>
					<Title text="checkout" color="dark" />
					<CheckoutForm
						user={user}
						isAddressDelivery={isAddressDelivery}
						showPostal={() => setAddressDelivery(false)}
						showAddress={() => setAddressDelivery(true)}
						onFormSubmit={handleFormSubmit}
					/>
				</>
			)}
		</LayoutContainer>
	);
};

export default Checkout;
