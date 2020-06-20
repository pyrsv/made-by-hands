import React from 'react';
import PropTypes from 'prop-types';
import OrderProduct from '../OrderProduct/OrderProduct';
import {
	OrderContainer,
	OrderInfo,
	OrderData,
	OrderNumber,
	OrderDate,
	OrderProductsList,
	OrderDelivery,
	DeliveryInfo,
	OrderSummary,
	OrderStatus,
	OrderPricing,
	OrderPricingItem,
} from './styles';

const Order = ({
	orderNo,
	date,
	products,
	status,
	canceled,
	totalSum,
	customerId,
	deliveryAddress,
	postalDelivery,
}) => {
	const { firstName, lastName, telephone } = customerId;
	return (
		<OrderContainer>
			<OrderData>
				<OrderNumber>Order: {orderNo} </OrderNumber>
				<OrderDate>{new Date(date).toDateString()}</OrderDate>
			</OrderData>
			<OrderInfo>
				<OrderProductsList>
					{products.map(product => {
						const {
							name,
							currentPrice,
							imageUrls: [image],
						} = product.product;
						return (
							<OrderProduct
								key={product._id}
								name={name}
								price={currentPrice}
								image={image}
								quantity={product.cartQuantity}
							/>
						);
					})}
				</OrderProductsList>
				<OrderDelivery>
					<DeliveryInfo>
						{firstName} {lastName}
					</DeliveryInfo>
					<DeliveryInfo>{telephone}</DeliveryInfo>
					{deliveryAddress ? (
						<>
							<DeliveryInfo>{deliveryAddress.city}</DeliveryInfo>
							<DeliveryInfo>{deliveryAddress.address}</DeliveryInfo>
						</>
					) : (
						<>
							<DeliveryInfo>{postalDelivery.city}</DeliveryInfo>
							<DeliveryInfo>
								New Post No. {postalDelivery.postalOffice}
							</DeliveryInfo>
						</>
					)}
				</OrderDelivery>
				<OrderSummary>
					{canceled ? (
						<OrderStatus status="Canceled">Canceled</OrderStatus>
					) : (
						<OrderStatus status={status}>{status}</OrderStatus>
					)}
					<OrderPricing>
						<OrderPricingItem>
							<span>Order sum:</span>
							<span>{totalSum}₴</span>
						</OrderPricingItem>
						<OrderPricingItem>
							<span>Delivery:</span>
							<span>{deliveryAddress ? '50₴' : '30₴'}</span>
						</OrderPricingItem>
						<OrderPricingItem bold>
							<span>Total:</span>
							<span>{totalSum + (deliveryAddress ? 50 : 30)}₴</span>
						</OrderPricingItem>
					</OrderPricing>
				</OrderSummary>
			</OrderInfo>
		</OrderContainer>
	);
};

Order.propTypes = {
	orderNo: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	status: PropTypes.string.isRequired,
	canceled: PropTypes.bool.isRequired,
	totalSum: PropTypes.number.isRequired,
	customerId: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
	).isRequired,
	deliveryAddress: PropTypes.oneOfType([
		PropTypes.object.isRequired,
		PropTypes.oneOf([null]).isRequired,
	]).isRequired,
	postalDelivery: PropTypes.oneOfType([
		PropTypes.object.isRequired,
		PropTypes.oneOf([null]).isRequired,
	]).isRequired,
};
export default Order;
