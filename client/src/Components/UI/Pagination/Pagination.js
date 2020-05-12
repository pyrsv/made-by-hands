import React, { useState } from 'react';
import { Ul, Li, Nav, Button, Link } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Pagination = ({
	itemsPerPage,
	totalItemsCount,
	paginate,
	portionSize = 3,
}) => {
	const pagesCount = Math.ceil(totalItemsCount / itemsPerPage);
	const pages = [];

	for (let i = 1; i <= pagesCount; i += 1) {
		pages.push(i);
	}

	const allPortion = Math.ceil(pages.length / portionSize);
	const [numberOfPortion, setNumberOfPortion] = useState(1);
	const leftNumberOfPortion = (numberOfPortion - 1) * itemsPerPage + 1;
	const rightNumberOfPortion = numberOfPortion * itemsPerPage;

	return (
		<Nav>
			{numberOfPortion > 1 && (
				<Button
					onClick={() => {
						setNumberOfPortion(numberOfPortion - 1);
					}}
				>
					<FontAwesomeIcon icon={['fas', 'chevron-left']} />
				</Button>
			)}
			<Ul>
				{pages
					.filter(p => p >= leftNumberOfPortion && p <= rightNumberOfPortion)
					.map(page => (
						<Li key={page}>
							<Link onClick={() => paginate(page)}>{page}</Link>
						</Li>
					))}
			</Ul>
			{allPortion > numberOfPortion && (
				<Button
					onClick={() => {
						setNumberOfPortion(numberOfPortion + 1);
					}}
				>
					<FontAwesomeIcon icon={['fas', 'chevron-right']} />
				</Button>
			)}
		</Nav>
	);
};

Pagination.propTypes = {
	itemsPerPage: PropTypes.number.isRequired,
	totalItemsCount: PropTypes.number.isRequired,
	paginate: PropTypes.func.isRequired,
	portionSize: PropTypes.number,
};

Pagination.defaultProps = {
	portionSize: 3,
};

export default Pagination;
