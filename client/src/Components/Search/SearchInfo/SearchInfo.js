import React from 'react';
import PropTypes from 'prop-types';

const SearchInfo = ({ query, quantity }) => (
	<p>
		On request {query} we found {quantity} products
	</p>
);

SearchInfo.propTypes = {
	query: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
};

export default SearchInfo;
