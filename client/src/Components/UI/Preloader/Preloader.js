import React from 'react';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Preloader = ({ size }) => {
	return <Loader type="Oval" color="#000" height={size} width={size} />;
};

Preloader.propTypes = {
	size: PropTypes.number,
};

Preloader.defaultProps = {
	size: 50,
};

export default Preloader;
