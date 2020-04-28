import React, { useState } from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';
import 'react-input-range/lib/css/index.css';
import './styles.scss';
import { Wrapper } from './styles';

const PriceRange = props => {
	const [range, setValue] = useState({ value: { min: 400, max: 1000 } });

	return (
		<Wrapper>
			<InputRange
				formatLabel={value => `${value}₴`}
				maxValue={2000}
				minValue={0}
				value={range.value}
				onChange={value => setValue({ value })}
				onChangeComplete={() =>
					props.changeRange(range.value.min, range.value.max)
				}
				step={10}
			/>
		</Wrapper>
	);
};

PriceRange.propTypes = {
	changeRange: PropTypes.func.isRequired,
};

export default PriceRange;
