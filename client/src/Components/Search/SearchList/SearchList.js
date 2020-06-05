import React from 'react';
import PropTypes from 'prop-types';
import ProductsList from '../../ProductsList/ProductsList';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';

const SearchList = ({ products, isFetching }) => {
	return (
		<LayoutContainer>
			<ProductsList
				isProductsFetching={isFetching}
				products={products}
				scrollable={false}
			/>
		</LayoutContainer>
	);
};

SearchList.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	isFetching: PropTypes.bool.isRequired,
};

export default SearchList;
