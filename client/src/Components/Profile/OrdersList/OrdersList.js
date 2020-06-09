// import React, { useState, useEffect } from 'react';
import React, { useEffect, useState } from 'react';
import Order from './Order/Order';
import { OrdersWrapper } from './styles';

const OrdersList = () => {
	const [orders, setOrders] = useState([]);
	// const [isFetching, setFetching] = useState(false);
	useEffect(() => {
		// setFetching(true);
		fetch('./mock.json', {
			headers: {
				Accept: 'application/json',
			},
		})
			.then(res => res.json())
			.then(res => {
				// setFetching(true);
				setOrders(res);
			});
	}, []);
	return (
		<OrdersWrapper>
			{orders.map(order => (
				<Order key={order._id} {...order} />
			))}
		</OrdersWrapper>
	);
};

export default OrdersList;
