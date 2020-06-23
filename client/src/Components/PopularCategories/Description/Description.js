import React from 'react';
import { NavLink } from 'react-router-dom';
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

const Description = ({ name, image, description, isReverse, url }) => {
	const currentUrl = `/catalog?categories=${url}`;

	return isReverse ? (
		<GridContainer>
			<StyledTextContainer>
				<Name>{name}</Name>
				<Text>{description}</Text>
				<NavLink to={currentUrl}>
					<Button text="More" onClick={currentUrl} />
				</NavLink>
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
				<NavLink to={currentUrl}>
					<Button text="More" onClick={currentUrl} />
				</NavLink>
			</StyledTextContainer>
		</GridContainer>
	);
};

Description.propTypes = {
	name: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	isReverse: PropTypes.bool.isRequired,
};

export default Description;
