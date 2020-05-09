import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ children: Component, ...rest }) => {
	return (
		<Route {...rest}>
			<Component />
		</Route>
	);
};

PrivateRoute.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};
