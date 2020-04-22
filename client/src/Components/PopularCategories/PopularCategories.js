import React from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import { StyledPopularCategories } from './styles';
import Title from './Title/Title';
import PopularCategoriesContainer from './PopularCategoriesContainer/PopularCategoriesContainer';

const PopularCategories = () => {
	return (
		<StyledPopularCategories>
			<LayoutContainer>
				<Title />
				<PopularCategoriesContainer />
			</LayoutContainer>
		</StyledPopularCategories>
	);
};

export default PopularCategories;
