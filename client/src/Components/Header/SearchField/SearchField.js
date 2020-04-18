import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputField from '../../UI/InputFiels/InputField';
import { SearchButton, SearchForm } from './styles';

const SearchField = () => {
	return (
		<SearchForm>
			<InputField
				type="text"
				name="header-search"
				onChange={() => {}}
				placeholder="Search"
				target="search"
			/>
			<SearchButton>
				<FontAwesomeIcon icon={['fas', 'search']} />
			</SearchButton>
		</SearchForm>
	);
};

export default SearchField;
