import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonsContainer, FilterButton, FilterIcon } from './styles';

const FilterButtons = () => {
	return (
		<ButtonsContainer>
			<FilterButton>
				<FilterIcon>
					<FontAwesomeIcon icon={['fas', 'filter']} />
				</FilterIcon>
				Filters
			</FilterButton>
			<FilterButton>
				<FilterIcon>
					<FontAwesomeIcon icon={['fas', 'sort-amount-down']} />
				</FilterIcon>
				Sort
			</FilterButton>
		</ButtonsContainer>
	);
};

export default FilterButtons;
