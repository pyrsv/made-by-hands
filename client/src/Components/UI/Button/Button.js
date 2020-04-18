import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton, Icon } from './styles';

const Button = ({ text, onClick, color, type, icon }) => {
	return (
		<StyledButton type={type} color={color} onClick={onClick}>
			<span>{text}</span>
			{icon && (
				<Icon>
					<FontAwesomeIcon icon={['far', icon]} />
				</Icon>
			)}
		</StyledButton>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.string.isRequired,
	color: PropTypes.oneOf(['dark', 'light']),
	type: PropTypes.oneOf(['wide', 'default']),
	icon: PropTypes.string,
};

Button.defaultProps = {
	color: 'dark',
	type: 'default',
	icon: null,
};

export default Button;
