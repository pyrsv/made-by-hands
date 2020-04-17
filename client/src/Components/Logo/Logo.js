import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/images/logo.png';

const Logo = () => {
	return <LogoImage src={logo} alt="Logo" />;
};

const LogoImage = styled.img`
	display: inline-block;
	width: 100%;
	height: auto;
	vertical-align: middle;
`;

export default Logo;
