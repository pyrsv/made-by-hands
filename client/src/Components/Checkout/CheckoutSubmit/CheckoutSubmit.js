import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	CheckoutSubmitWrapper,
	CheckIcon,
	CheckoutHeading,
	CheckoutText,
} from './styles';

const CheckoutSubmit = ({ orderNo }) => {
	return (
		<CheckoutSubmitWrapper>
			<CheckIcon>
				<FontAwesomeIcon icon={['fas', 'check']} />
			</CheckIcon>
			<CheckoutHeading>Order No. {orderNo} confirmed.</CheckoutHeading>
			<CheckoutText>
				The manager will contact you to clarify the details of the order
			</CheckoutText>
		</CheckoutSubmitWrapper>
	);
};

CheckoutSubmit.propTypes = {
	orderNo: PropTypes.string.isRequired,
};

export default CheckoutSubmit;
