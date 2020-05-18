import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InputField from '../../UI/InputFiels/InputField';
import { SearchButton, SearchForm } from './styles';
import { Formik } from 'formik';
// import { DebounceInput } from 'react-debounce-input';
import { getSearchProduct } from './getSearchProduct';
// import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// const SearchField = () => {
// 	return (
// 		<SearchForm>
// 			<InputField
// 				type="text"
// 				name="header-search"
// 				onChange={() => {}}
// 				placeholder="Search"
// 				target="search"
// 				value=""
// 			/>
// 			<SearchButton>
// 				<FontAwesomeIcon icon={['fas', 'search']} />
// 			</SearchButton>
// 		</SearchForm>
// 	);
// };

// export default SearchField;

const SearchField = () => {
	const dispatch = useDispatch();

	return (
		<SearchForm>
			<Formik
				initialValues={{ headerSearch: '' }}
				onSubmit={values => {
					dispatch(getSearchProduct(values.headerSearch));
					// console.log(values.headerSearch);
				}}
			>
				{({ handleSubmit, handleChange }) => (
					<SearchForm onSubmit={handleSubmit}>
						<InputField
							type="text"
							name="headerSearch"
							placeholder="Search"
							onChange={handleChange}
							required
						>
							{/* <DebounceInput
								minLength={1}
								debounceTimeout={100}
								onChange={event => console.log(event.target.value)}
							/> */}
						</InputField>

						<SearchButton>
							{/* <NavLink to="/catalog"> */}
							<FontAwesomeIcon icon={['fas', 'search']} />
							{/* </NavLink> */}
						</SearchButton>
					</SearchForm>
				)}
			</Formik>
		</SearchForm>
	);
};

export default SearchField;
