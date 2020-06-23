import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch() {}

	render() {
		// eslint-disable-next-line react/destructuring-assignment
		if (this.state.hasError) {
			return <h1>Что-то пошло не так.</h1>;
		}

		// eslint-disable-next-line react/destructuring-assignment
		return this.props.children;
	}
}

ErrorBoundary.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default ErrorBoundary;
