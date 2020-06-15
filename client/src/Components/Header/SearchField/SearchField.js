import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import CloseButton from '../../UI/CloseButton/CloseButton';
import {
	SearchButton,
	SearchForm,
	SearchInput,
	CloseButtonWrapper,
} from './styles';

const SearchField = ({ onToggle }) => {
	const history = useHistory();
	const isHeaderMobile = useSelector(state => state.UI.isHeaderMobile);
	const isMobile = useSelector(state => state.UI.isMobile);

	const handleSearchSubmit = ({ search }) => {
		history.push(`/search?query=${encodeURI(search.trim())}`);
		onToggle();
	};

	return (
		<>
			<Formik initialValues={{ search: '' }} onSubmit={handleSearchSubmit}>
				{({ values, handleSubmit, handleChange }) => (
					<SearchForm onSubmit={handleSubmit}>
						<SearchInput
							type="text"
							name="search"
							onChange={handleChange}
							placeholder="Search"
							target="search"
							value={values.search}
						/>
						<SearchButton>
							<FontAwesomeIcon size="1x" icon={['fas', 'search']} />
						</SearchButton>

						{(isMobile || isHeaderMobile) && (
							<CloseButtonWrapper>
								<CloseButton
									size={isHeaderMobile && !isMobile ? 32 : 22}
									onClick={onToggle}
								/>
							</CloseButtonWrapper>
						)}
					</SearchForm>
				)}
			</Formik>
			{(isMobile || isHeaderMobile) && <Backdrop onClick={onToggle} />}
		</>
	);
};

SearchField.propTypes = {
	onToggle: PropTypes.func,
};

SearchField.defaultProps = {
	onToggle: () => {},
};

export default SearchField;
