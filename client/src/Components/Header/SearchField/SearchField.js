import React from 'react';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputField from '../../UI/InputFiels/InputField';
import { SearchButton, SearchForm } from './styles';

const SearchField = () => {
	return (
		<Formik initialValues={{ search: '' }} onSubmit={() => {}}>
			{({ values, handleSubmit, handleChange }) => (
				<SearchForm onSubmit={handleSubmit}>
					<InputField
						type="text"
						name="search"
						onChange={handleChange}
						placeholder="Search"
						target="search"
						value={values.search}
					/>
					<SearchButton>
						<FontAwesomeIcon icon={['fas', 'search']} />
					</SearchButton>
				</SearchForm>
			)}
		</Formik>
	);
};

export default SearchField;
