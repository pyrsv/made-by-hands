import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from '../../ProductsList/ProductsList';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';

const SalesList = ({ products, isFetching, quantity, perPage, startPage }) => {
	return (
		<LayoutContainer>
			<ProductsList
				products={products}
				productsQuantity={quantity}
				startPage={startPage}
				perPage={perPage}
				isProductsFetching={isFetching}
				scrollable
			/>
		</LayoutContainer>
	);
};

SalesList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	isFetching: PropTypes.bool.isRequired,
	quantity: PropTypes.number.isRequired,
	perPage: PropTypes.number.isRequired,
	startPage: PropTypes.number.isRequired,
};

export default SalesList;
