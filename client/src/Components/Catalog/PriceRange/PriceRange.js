import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import './styles.scss';
import { Wrapper } from './styles';

const PriceRange = ({ changeRange }) => {
	const [range, setValue] = useState({ value: { min: 0, max: 2000 } });

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

PriceRange.propTypes = {
	changeRange: PropTypes.func.isRequired,
};

export default PriceRange;
