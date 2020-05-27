import React from 'react';
import { SearchSection } from './styles';
import Title from '../UI/Title/title';
import SearchList from './SearchList/SearchList';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

const Search = () => {
	return (
		<SearchSection>
			<LayoutContainer>
				<Title text="Search" color="dark" />
				<SearchList />
			</LayoutContainer>
		</SearchSection>
	);
};

export default Search;
