import React from 'react';
// import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredProducts } from '../../../store/actions/catalogActions';
import CustomSelect from '../../UI/Select/Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FilterIcon } from './styles';

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

const SortDropdown = () => {
	const dispatch = useDispatch();
	// const history = useHistory();
	// const location = useLocation();
	const config = useSelector(state => state.catalog.config);

	const handleChange = e => {
		dispatch(getFilteredProducts({ ...config, sort: e.value, startPage: 1 }));
	};
	return (
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
	);
};

export default SortDropdown;
