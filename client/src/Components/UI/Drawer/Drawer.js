import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop/Backdrop';
import { DrawerWrapper, DrawerHeading, DrawerContent } from './styles';

const Drawer = ({ heading, children, onToggle }) => {
	return (
		<DrawerWrapper>
			{heading && <DrawerHeading>{heading}</DrawerHeading>}
			<DrawerContent>{children}</DrawerContent>
			<Backdrop onClick={onToggle} />
		</DrawerWrapper>
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
