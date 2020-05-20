import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import querystring from 'query-string';
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

const SortSelect = () => {
	const history = useHistory();
	const location = useLocation();
	const currentParams = querystring.parse(location.search.slice(1));

	const [value, setValue] = useState(null);

	const handleChange = e => {
		setValue(() => options.find(opt => opt.value === e.value));

		history.push({
			search: querystring.stringify({ ...currentParams, sort: e.value }),
		});
		// dispatch(getFilteredProducts({ ...config, sort: e.value, startPage: 1 }));
	};

	const getInitialSortValue = () => {
		const currentSortParam = currentParams.sort;
		if (
			currentSortParam &&
			options.some(opt => opt.value === currentSortParam)
		) {
			setValue(options.find(opt => opt.value === currentSortParam));
		} else {
			setValue(null);
		}
	};

	useEffect(() => {
		getInitialSortValue();
	}, [location]);

	return (
		<CustomSelect
			value={
				value
					? {
							...value,
							label: (
								<>
									<FilterIcon>
										<FontAwesomeIcon icon={['fas', value.icon]} />
									</FilterIcon>
									{value.label}
								</>
							),
					  }
					: null
			}
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

export default SortSelect;
