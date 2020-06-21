import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Order from './Order/Order';
import Preloader from '../../UI/Preloader/Preloader';
import { OrdersWrapper, Placeholder, PreloaderContainer } from './styles';

const OrdersList = () => {
	const [orders, setOrders] = useState([]);
	const [isFetching, setFetching] = useState(false);
	useEffect(() => {
		setFetching(true);
		axios
			.get('/api/orders')
			.then(res => {
				setFetching(false);
				setOrders(res.data);
			})
			.catch(err => err);
	}, []);

	if (isFetching) {
		return (
			<OrdersWrapper>
				<PreloaderContainer>
					<Preloader size={80} />
				</PreloaderContainer>
			</OrdersWrapper>
		);
	}
	return (
		<OrdersWrapper>
			{orders.length > 0 && !isFetching ? (
				orders.map(order => <Order key={order._id} {...order} />)
			) : (
				<Placeholder>You have no orders yet</Placeholder>
			)}
		</OrdersWrapper>
	);
};

export default OrdersList;
