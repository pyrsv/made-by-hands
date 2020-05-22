import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFilters } from '../../../store/actions/UIActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SortSelect from '../SortSelect/SortSelect';
import { ButtonsContainer, FilterButton, FilterIcon } from './styles';

const FilterButtons = () => {
	const dispatch = useDispatch();

	return (
		<ButtonsContainer>
			<FilterButton onClick={() => dispatch(toggleFilters())}>
				<FilterIcon>
					<FontAwesomeIcon icon={['fas', 'filter']} />
				</FilterIcon>
				Filters
			</FilterButton>
			<SortSelect />
		</ButtonsContainer>
	);
};

export default FilterButtons;
