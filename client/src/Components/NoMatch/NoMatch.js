import React from 'react';
import Title from '../UI/Title/title';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import { StyledLink } from './styles';

const NoMatch = () => {
	return (
		<LayoutContainer>
			<Title color="dark" text="Page not found :(" />
			<StyledLink to="/">Go back to main page &gt;</StyledLink>
		</LayoutContainer>
	);
};

export default NoMatch;
