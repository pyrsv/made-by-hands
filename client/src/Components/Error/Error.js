import React from 'react';
import Title from '../UI/Title/title';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import { StyledLink } from './styles';

const NoMatch = () => {
	return (
		<LayoutContainer>
			<Title color="dark" text="Oops! Something went wrong" />
			<StyledLink to="/">Go to main page &gt;</StyledLink>
		</LayoutContainer>
	);
};

export default NoMatch;
