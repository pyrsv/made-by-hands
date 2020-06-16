import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton, Icon } from './styles';

const Button = ({
	text,
	onClick,
	color,
	size,
	type,
	icon,
	disabled,
	iconPrefix,
}) => {
	return (
		<StyledButton
			disabled={disabled}
			type={type}
			size={size}
			color={color}
			onClick={onClick}
		>
			<span>{text}</span>
			{icon && (
				<Icon>
					<FontAwesomeIcon icon={[iconPrefix, icon]} />
				</Icon>
			)}
		</StyledButton>
	);
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	color: PropTypes.oneOf(['dark', 'light']),
	size: PropTypes.oneOf(['wide', 'default']),
	type: PropTypes.string,
	icon: PropTypes.string,
	disabled: PropTypes.bool,
	iconPrefix: PropTypes.string,
};

Button.defaultProps = {
	color: 'dark',
	type: 'button',
	size: 'default',
	icon: null,
	disabled: false,
	iconPrefix: 'far',
};

export default Button;
