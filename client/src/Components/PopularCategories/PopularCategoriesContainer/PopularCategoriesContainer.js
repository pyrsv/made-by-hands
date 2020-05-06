import { useSelector } from 'react-redux';
import React from 'react';
import Description from '../Description/Description';

const PopularCategoriesContainer = () => {
	const categories = useSelector(state => state.filters.categories.slice(0, 3));

	return (
		<>
			{categories.map((category, index) => (
				<Description
					key={category.name}
					isReverse={index % 2 === 0}
					name={category.name}
					image={category.imgUrl}
					description={category.description}
				/>
			))}
		</>
	);
};

export default PopularCategoriesContainer;
