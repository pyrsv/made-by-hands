import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProducts } from '../../../store/actions/catalogActions';
import { toggleFilters } from '../../../store/actions/UIActions';
import CustomSelect from '../../UI/Select/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonsContainer, FilterButton, FilterIcon } from './styles';

const options = [
	{
		value: '-currentPrice',
		label: 'Price 9-0',
		icon: 'sort-numeric-up',
	},
	{
		value: 'currentPrice',
		label: 'Price 0-9',
		icon: 'sort-numeric-down',
	},
	{
		value: 'name',
		label: 'Name A-Z',
		icon: 'sort-numeric-up',
	},
	{
		value: '-name',
		label: 'Price Z-A',
		icon: 'sort-numeric-down',
	},
];

const FilterButtons = () => {
	const dispatch = useDispatch();
	const config = useSelector(state => state.catalog.config);

	const handleChange = e => {
		dispatch(getFilteredProducts({ ...config, sort: e.value, startPage: 1 }));
	};

	return (
		<>
			<ButtonsContainer>
				<FilterButton onClick={() => dispatch(toggleFilters())}>
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
