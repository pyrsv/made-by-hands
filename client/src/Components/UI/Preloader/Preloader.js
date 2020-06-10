import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Preloader = ({ size, color }) => {
	return <Loader type="Oval" color={color} height={size} width={size} />;
};

Preloader.propTypes = {
	size: PropTypes.number,
	color: PropTypes.string,
};

Preloader.defaultProps = {
	size: 50,
	color: '#000',
};

export default Preloader;
