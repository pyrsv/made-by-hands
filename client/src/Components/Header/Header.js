import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './styles';

const Header = () => {
	return (
		<Nav>
			<Link to="">Home </Link>
			<Link to="/cart">Cart </Link>
			<Link to="/filter">Filter </Link>
			<Link to="/profile">Profile </Link>
		</Nav>
	);
};

export default Header;
