import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styles';

const AppContainer = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

AppContainer.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default AppContainer;
