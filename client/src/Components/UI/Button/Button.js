import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledButton, Icon, PreloaderContainer } from './styles';
import Preloader from '../Preloader/Preloader';

const Button = ({
	text,
	onClick,
	color,
	size,
	type,
	icon,
	disabled,
	isLoading,
	styledDisabled,
}) => {
	return (
		<StyledButton
			disabled={disabled}
			type={type}
			size={size}
			color={color}
			onClick={onClick}
			styledDisabled={styledDisabled}
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
							<FontAwesomeIcon icon={['far', icon]} />
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
	isLoading: PropTypes.bool,
	styledDisabled: PropTypes.bool,
};

Button.defaultProps = {
	color: 'dark',
	type: 'button',
	size: 'default',
	icon: null,
	disabled: false,
	isLoading: false,
	styledDisabled: false,
};

export default Button;
