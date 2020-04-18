import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styles';

const LayoutContainer = ({ children }) => (
	<StyledContainer>{children}</StyledContainer>
);

LayoutContainer.propTypes = {
	children: PropTypes.element.isRequired,
};

export default LayoutContainer;
