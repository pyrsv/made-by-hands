import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo/Logo';
import LayoutContainer from './LayoutContainer/LayoutContainer';

const Header = () => {
	return (
		<StyledHeader>
			<LayoutContainer>
				<Logo />
				<div style={{ backgroundColor: 'red', height: '50px' }}>aaaa</div>
			</LayoutContainer>
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	background-color: ${props => props.theme.lightPink};
`;

const Nav = styled.nav``;

export default Header;

// eslint-disable-next-line no-lone-blocks
{
	/* <Link to="">Home </Link>
					<Link to="/cart">Cart </Link>
					<Link to="/filter">Filter </Link>
					<Link to="/profile">Profile </Link> */
}
