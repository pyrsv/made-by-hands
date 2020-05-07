import React from 'react';
import CustomSelect from '../../UI/Select/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonsContainer, FilterButton, FilterIcon } from './styles';

const FilterButtons = () => {
	const options = [
		{
			value: '-currentPrice',
			label: 'Price 9-0',
			icon: 'sort-numeric-up',
		},
		{
			value: '+currentPrice',
			label: 'Price 0-9',
			icon: 'sort-numeric-down',
		},
		{
			value: '-name',
			label: 'Name A-Z',
			icon: 'sort-numeric-up',
		},
		{
			value: '+name',
			label: 'Price Z-A',
			icon: 'sort-numeric-down',
		},
	];

	const handleChange = () => {};

	return (
		<>
			<ButtonsContainer>
				<FilterButton>
					<FilterIcon>
						<FontAwesomeIcon icon={['fas', 'filter']} />
					</FilterIcon>
					Filters
				</FilterButton>
				<CustomSelect
					onChange={handleChange}
					options={options.map(opt => ({
						...opt,
						label: (
							<>
								<FilterIcon>
									<FontAwesomeIcon icon={['fas', opt.icon]} />
								</FilterIcon>
								{opt.label}
							</>
						),
					}))}
					placeholder={
						<>
							<FilterIcon>
								<FontAwesomeIcon icon={['fas', 'sort-amount-down']} />
							</FilterIcon>
							Sort
						</>
					}
				/>
			</ButtonsContainer>
		</>
	);
};

export default FilterButtons;
