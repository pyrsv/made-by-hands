import React from 'react';
import { Link } from 'react-router-dom';
import styled , { ThemeProvider } from 'styled-components';

const theme = {};

const Nav = styled.nav`
	display: flex;
    justify-content: space-around;
	width: 100%;
`;

export default function Header() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Nav>
					<Link to="">Home </Link>
					<Link to="/cart">Cart </Link>
					<Link to="/filter">Filter </Link>
					<Link to="/profile">Profile </Link>
				</Nav>
			</ThemeProvider>
		</>
	);
}
