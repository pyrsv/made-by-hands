import React from 'react';
import { StyledTitle } from './styles';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';

const Title = () => {
	return (
		<LayoutContainer>
			<StyledTitle>
				<h1>Популярные категории</h1>
			</StyledTitle>
		</LayoutContainer>
	);
};

export default Title;
