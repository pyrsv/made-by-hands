import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from '../../Pages/ErrorPage';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch() {
		this.setState({ hasError: true });
	}

	render() {
		// eslint-disable-next-line react/destructuring-assignment
		if (this.state.hasError) {
			return <ErrorPage />;
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
