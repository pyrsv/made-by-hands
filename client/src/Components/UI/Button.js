import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ text, onClick, color, type, icon }) => {
	const StyledButton = styled.button`
		display: inline-block;
		position: relative;
		box-sizing: border-box;
		border-radius: 4px;
		font-size: 16px;
		min-width: 127px;
		cursor: pointer;
		width: ${type === 'wide' ? '100%' : 'auto'};
		padding: 8px 12px;
		text-transform: ${color === 'dark' ? 'uppercase' : 'titlecase'};
		font-weight: ${color === 'dark' ? '600' : '500'};
		font-family: 'Raleway', sans-serif;
		background-color: ${themeProps =>
			color === 'dark' ? themeProps.theme.mainDark : 'transparent'};
		color: ${themeProps =>
			color === 'dark' ? themeProps.theme.darkButtonColor : themeProps.theme.mainDark};
		border: ${themeProps => (color === 'dark' ? 'none' : `1px solid ${themeProps.theme.mainDark}`)};
		outline: none;
	`;

	const Icon = styled.i`
		display: inline-block;
		position: relative;
		width: 16px;
		height: 16px
		color: inherit;
		margin-left: 5px;
		bottom: -1px;
	`;

	return (
		<StyledButton onClick={onClick}>
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
	color: PropTypes.oneOf('dark', 'light'),
	type: PropTypes.oneOf('wide', 'default'),
	icon: PropTypes.string,
};

Button.defaultProps = {
	color: 'dark',
	type: 'default',
	icon: null,
};

export default Button;
