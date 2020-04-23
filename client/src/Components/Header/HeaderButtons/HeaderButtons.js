import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonsWrapper, IconLink } from './styles';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderButtons = ({ onSearchClick }) => {
	return (
		<ButtonsWrapper>
			<IconLink onClick={onSearchClick}>
				<FontAwesomeIcon icon={['fas', 'search']} />
			</IconLink>
			<IconLink>
				<NavLink to="/">
					<FontAwesomeIcon icon={['fas', 'shopping-cart']} />
				</NavLink>
			</IconLink>
		</ButtonsWrapper>
	);
};

HeaderButtons.propTypes = {
	onSearchClick: PropTypes.func.isRequired,
};

export default HeaderButtons;
