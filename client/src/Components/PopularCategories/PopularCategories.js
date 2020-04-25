import React from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import { StyledPopularCategories } from './styles';
import PopularCategoriesContainer from './PopularCategoriesContainer/PopularCategoriesContainer';
import Title from '../UI/Title/title';

const PopularCategories = () => {
	return (
		<StyledPopularCategories>
			<LayoutContainer>
				<Title text="popular categories" />
				<PopularCategoriesContainer />
			</LayoutContainer>
		</StyledPopularCategories>
	);
};

export default PopularCategories;
