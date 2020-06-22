import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Title from '../UI/Title/title';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import CheckoutSumbit from './CheckoutSubmit/CheckoutSubmit';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import ProductListThumb from '../ProductListThumb/ProductListThumb';
import {
	CheckoutWrapper,
	CheckoutSubheading,
	ProductsWrapper,
	CheckoutSummary,
	CheckoutSummaryItem,
	OrderWrapper,
} from './styles';

const Checkout = () => {
	const [isAddressDelivery, setAddressDelivery] = useState(false);
	const [isCheckoutSuccess, setCheckoutSuccess] = useState(false);
	const [orderNo, setOrderNo] = useState(null);
	const user = useSelector(state => state.auth.currentUser) || {};
	const products = useSelector(state => state.cartReducer.currentCart) || {};
	const totalSum = products.reduce((sum, product) => {
		sum += product.product.currentPrice * product.cartQuantity;
		return sum;
	}, 0);

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
					<CheckoutWrapper>
						<CheckoutForm
							user={user}
							isAddressDelivery={isAddressDelivery}
							showPostal={() => setAddressDelivery(false)}
							showAddress={() => setAddressDelivery(true)}
							onFormSubmit={handleFormSubmit}
						/>
						<OrderWrapper>
							<CheckoutSubheading>Your order</CheckoutSubheading>
							<ProductsWrapper>
								<ProductListThumb size="large" products={products} />
								<CheckoutSummary>
									<CheckoutSummaryItem>
										<span>Order sum:</span>
										<span>{totalSum}₴</span>
									</CheckoutSummaryItem>
									<CheckoutSummaryItem>
										<span>Delivery:</span>
										<span>{isAddressDelivery ? '50₴' : 'by Post tariff'}</span>
									</CheckoutSummaryItem>
									<CheckoutSummaryItem bold>
										<span>Total:</span>
										<span>
											{`${totalSum + (isAddressDelivery ? 50 : 0)}₴ ${
												!isAddressDelivery ? ' + delivery' : ''
											}`}
										</span>
									</CheckoutSummaryItem>
								</CheckoutSummary>
							</ProductsWrapper>
						</OrderWrapper>
					</CheckoutWrapper>
				</>
			)}
		</LayoutContainer>
	);
};

export default Checkout;
