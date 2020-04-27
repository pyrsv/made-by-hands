import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

const PriceRange = () => {
	const [range, setValue] = useState({ value: { min: 400, max: 1000 } });
	useEffect(() => {
		//   console.log(range.value)
	}, [range]);
	return (
		<>
			<span>price</span>
			<InputRange
				formatLabel={value => `${value}₴`}
				maxValue={2000}
				minValue={0}
				value={range.value}
				onChange={value => setValue({ value })}
			/>
		</>
	);
};

export default PriceRange;
