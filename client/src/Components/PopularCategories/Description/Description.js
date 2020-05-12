import React from 'react';
import {
	Image,
	StyledImageContainer,
	StyledTextContainer,
	GridContainer,
	Name,
	Text,
} from './styles';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const Description = ({ name, image, description, isReverse }) => {
	const changePage = () => {
		window.location.assign('https://www.google.com/');
	};

	return isReverse ? (
		<GridContainer>
			<StyledTextContainer>
				<Name>{name}</Name>
				<Text>{description}</Text>
				<Button text="More" onClick={() => changePage()} />
			</StyledTextContainer>

			<StyledImageContainer>
				<Image src={image} />
			</StyledImageContainer>
		</GridContainer>
	) : (
		<GridContainer>
			<StyledImageContainer>
				<Image src={image} />
			</StyledImageContainer>

			<StyledTextContainer>
				<Name>{name}</Name>
				<Text>{description}</Text>
				<Button text="More" onClick={() => changePage()} />
			</StyledTextContainer>
		</GridContainer>
	);
};

Description.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isReverse: PropTypes.bool.isRequired,
};

export default Description;
