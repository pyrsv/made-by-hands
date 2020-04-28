import React from 'react';
import { FooterTextDiv } from './style';
import PropTypes from 'prop-types';

export const FooterText = ({ type, text, marginBottom }) => {
	return (
		<FooterTextDiv type={type} marginBottom={marginBottom}>
			{text}
		</FooterTextDiv>
	);
};
FooterText.propTypes = {
	type: PropTypes.oneOf(['title', 'link']),
	text: PropTypes.string.isRequired,
	marginBottom: PropTypes.string.isRequired,
};
FooterText.defaultProps = {
	type: 'title',
};
