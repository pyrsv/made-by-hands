import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import CloseButton from '../CloseButton/CloseButton';
import {
	DrawerWrapper,
	DrawerHeading,
	DrawerContent,
	CloseButtonContainer,
} from './styles';

const Drawer = ({ heading, children, onToggle }) => {
	return (
		<>
			<DrawerWrapper>
				<CloseButtonContainer>
					<CloseButton onClick={onToggle} size={30} />
				</CloseButtonContainer>
				{heading && <DrawerHeading>{heading}</DrawerHeading>}
				<DrawerContent>{children}</DrawerContent>
			</DrawerWrapper>
			<Backdrop onClick={onToggle} />
		</>
	);
};

Drawer.propTypes = {
	heading: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	onToggle: PropTypes.func.isRequired,
};

Drawer.defaultProps = {
	heading: '',
};

export default Drawer;
