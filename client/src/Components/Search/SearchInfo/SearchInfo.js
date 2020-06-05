import React from 'react';
import PropTypes from 'prop-types';
import {
	Info,
	InfoAccent,
	StyledLink,
	Query,
	Category,
	CategoryCount,
	CategoriesList,
} from './styles';

const SearchInfo = ({ query, products }) => {
	const categories = products.reduce((obj, prod) => {
		const cat = prod.categories;
		// eslint-disable-next-line no-unused-expressions
		obj[cat] ? (obj[cat] += 1) : (obj[cat] = 1);
		return obj;
	}, {});

	return (
		<>
			{products.length > 0 ? (
				<>
					<Query>{query}</Query>
					<Info>
						We found <InfoAccent>{products.length}</InfoAccent> products in
						categories:
						<CategoriesList>
							{Object.entries(categories).map(([category, count]) => (
								<>
									<Category
										to={{
											pathname: 'catalog',
											search: `?categories=${category}`,
										}}
									>
										{category}
										<CategoryCount>({count})</CategoryCount>
									</Category>
								</>
							))}
						</CategoriesList>
					</Info>
				</>
			) : (
				<Info>
					Unfortunately, we did not find any products for the{' '}
					<InfoAccent>&quot;{query}&quot;</InfoAccent> :(. You can pick up
					something for yourself in our{' '}
					<StyledLink to="/catalog">Catalog</StyledLink>.
				</Info>
			)}
		</>
	);
};

SearchInfo.propTypes = {
	query: PropTypes.string.isRequired,
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchInfo;
