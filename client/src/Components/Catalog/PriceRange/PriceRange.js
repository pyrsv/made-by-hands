import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './styles.scss';
import { Wrapper } from './styles';

const PriceRange = ({
	changeRange,
	minPrice,
	maxPrice,
	mostExpensive,
	mostCheap,
}) => {
	const [range, setValue] = useState({
		value: { min: minPrice, max: maxPrice },
	});
	useEffect(() => {
		setValue({ value: { min: minPrice, max: maxPrice } });
	}, [minPrice, maxPrice]);
	return (
		<Wrapper>
			<InputRange
				formatLabel={value => `${value}₴`}
				maxValue={mostExpensive}
				minValue={mostCheap}
				value={range.value}
				onChange={value => setValue({ value })}
				onChangeComplete={() => changeRange(range.value.min, range.value.max)}
				step={10}
			/>
		</Wrapper>
	);
};

PriceRange.propTypes = {
	changeRange: PropTypes.func.isRequired,
	minPrice: PropTypes.number.isRequired,
	maxPrice: PropTypes.number.isRequired,
	mostCheap: PropTypes.number.isRequired,
	mostExpensive: PropTypes.number.isRequired,
};

export default PriceRange;
