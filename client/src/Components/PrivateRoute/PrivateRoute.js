import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
	return <Route {...rest}>{children}</Route>;
};

PrivateRoute.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default PrivateRoute;
