import React from 'react';
import PropTypes from 'prop-types';
import Preloader from '../Preloader/Preloader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton, Icon, PreloaderContainer } from './styles';

const Button = ({
	text,
	onClick,
	color,
	size,
	type,
	icon,
	disabled,
	iconPrefix,
	isLoading,
}) => {
	return (
		<StyledButton
			disabled={disabled}
			type={type}
			size={size}
			color={color}
			onClick={onClick}
			isLoading={isLoading}
		>
			{isLoading ? (
				<PreloaderContainer>
					<Preloader size={24} color="#fff" />
				</PreloaderContainer>
			) : (
				<>
					<span>{text}</span>
					{icon && (
						<Icon>
							<FontAwesomeIcon icon={[iconPrefix, icon]} />
						</Icon>
					)}
				</>
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
	isLoading: PropTypes.bool,
};

Button.defaultProps = {
	color: 'dark',
	type: 'button',
	size: 'default',
	icon: null,
	disabled: false,
	iconPrefix: 'far',
	isLoading: false,
};

export default Button;
