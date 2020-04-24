import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
	DropdownItem,
	DropdownWrapper,
	DropdownList,
	DropdownHeading,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dropdown = ({ isOpen, heading, onOpen, routes }) => {
	const node = useRef();
	const opener = useRef();

	useEffect(() => {
		const handleDocumentClick = event => {
			if (
				node.current &&
				!node.current.contains(event.target) &&
				!opener.current.contains(event.target)
			) {
				onOpen();
			}
		};

		window.addEventListener('mousedown', handleDocumentClick);
		return document.removeEventListener('mousedown', handleDocumentClick);
	}, [isOpen, onOpen]);

	return (
		<DropdownWrapper>
			<DropdownHeading
				ref={opener}
				tabIndex={0}
				role="button"
				onClick={onOpen}
				onKeyDown={onOpen}
			>
				{heading} <FontAwesomeIcon icon={['fas', 'chevron-down']} />
			</DropdownHeading>
			{isOpen && (
				<DropdownList ref={node}>
					{routes.map(item => (
						<DropdownItem key={item.name}>
							<NavLink to={item.route}>{item.name}</NavLink>
						</DropdownItem>
					))}
				</DropdownList>
			)}
		</DropdownWrapper>
	);
};

Dropdown.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	heading: PropTypes.string.isRequired,
	onOpen: PropTypes.func.isRequired,
	routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Dropdown;
