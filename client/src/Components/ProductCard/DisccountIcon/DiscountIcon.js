import React from 'react';
import PropTypes from 'prop-types';
import { StyledDiscount } from './styles';

const DiscountIcon = ({ previousPrice, currentPrice }) => {
	return (
		<StyledDiscount>
			<span>
				{Math.ceil(((currentPrice - previousPrice) * 100) / currentPrice)} %
			</span>
		</StyledDiscount>
	);
};

DiscountIcon.propTypes = {
	previousPrice: PropTypes.number.isRequired,
	currentPrice: PropTypes.number.isRequired,
};

export default DiscountIcon;
