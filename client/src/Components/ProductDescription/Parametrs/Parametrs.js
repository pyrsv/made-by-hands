import React from 'react';
import { ParamText, Li } from './styles';
import PropTypes from 'prop-types';

const Parametrs = ({ parameters }) => {
	return (
		<>
			<ParamText>Parameters:</ParamText>
			<ul>
				{parameters.map(parametr => {
					return <Li key={parametr}>{parametr}</Li>;
				})}
			</ul>
		</>
	);
};

Parametrs.propTypes = {
	parameters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Parametrs;
