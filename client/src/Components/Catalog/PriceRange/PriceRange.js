import React, { useState } from 'react';
import InputRange from 'react-input-range';
import { useDispatch } from 'react-redux';
import {
	setMinPrice,
	setMaxPrice,
} from '../../../store/actions/catalogActions';
import 'react-input-range/lib/css/index.css';
import './styles.scss';
import { Wrapper } from './styles';

const PriceRange = () => {
	const [range, setValue] = useState({ value: { min: 400, max: 1000 } });
	const dispatch = useDispatch();

	const changeRange = (min, max) => {
		dispatch(setMinPrice(min));
		dispatch(setMaxPrice(max));
	};

	return (
		<Wrapper>
			<InputRange
				formatLabel={value => `${value}₴`}
				maxValue={2000}
				minValue={0}
				value={range.value}
				onChange={value => setValue({ value })}
				onChangeComplete={() => changeRange(range.value.min, range.value.max)}
				step={10}
			/>
		</Wrapper>
	);
};

export default PriceRange;
