import React from 'react';
import {
	StyledDescription,
	StyledInfoContainer,
	StyledInfoContainerReverse,
	StyledImagesContainerRight,
	Images,
	StyledTextUl,
	StyledImagesContainer,
	StyledName,
	StyledText,
} from './styles';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const Description = ({
	imgSrc,
	imgSrcSecondItem,
	isRight,
	isMarker,
	name,
	nameSecondItem,
	textSecondItem,
	text,
	firstLi,
	secondLi,
	thirdLi,
}) => {
	return (
		<>
			<StyledDescription>
				<StyledImagesContainer>
					<Images src={imgSrc} />
				</StyledImagesContainer>
				<StyledInfoContainer>
					<StyledName>{name}</StyledName>
					<StyledText>{text}</StyledText>
					<Button text="More" type="button" onClick={() => 'ds'} />
				</StyledInfoContainer>
			</StyledDescription>

			<StyledDescription>
				<StyledInfoContainerReverse>
					<StyledName>{nameSecondItem}</StyledName>
					{isMarker ? (
						<StyledTextUl>
							<li>{firstLi}</li>
							<li>{secondLi}</li>
							<li>{thirdLi}</li>
						</StyledTextUl>
					) : (
						<StyledText>{textSecondItem}</StyledText>
					)}
					<Button text="More" type="button" onClick={() => 'ds'} />
				</StyledInfoContainerReverse>
				{isRight ? (
					<StyledImagesContainerRight>
						<Images src={imgSrcSecondItem} />
					</StyledImagesContainerRight>
				) : (
					<StyledImagesContainer>
						<Images src={imgSrcSecondItem} />
					</StyledImagesContainer>
				)}
			</StyledDescription>
		</>
	);
};

Description.defaultProps = {
	isRight: undefined,
	isMarker: undefined,
	imgSrc: undefined,
	imgSrcSecondItem: undefined,
	name: undefined,
	nameSecondItem: undefined,
	text: undefined,
	textSecondItem: undefined,
	firstLi: undefined,
	secondLi: undefined,
	thirdLi: undefined,
};

Description.propTypes = {
	isRight: PropTypes.bool,
	isMarker: PropTypes.bool,
	imgSrc: PropTypes.string,
	imgSrcSecondItem: PropTypes.string,
	name: PropTypes.string,
	nameSecondItem: PropTypes.string,
	text: PropTypes.string,
	textSecondItem: PropTypes.string,
	firstLi: PropTypes.string,
	secondLi: PropTypes.string,
	thirdLi: PropTypes.string,
};

export default Description;
