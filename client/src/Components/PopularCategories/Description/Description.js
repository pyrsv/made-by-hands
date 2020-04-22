import React from 'react';
import {
	StyledTextRight,
	StyledDescription,
	StyledImagesContainerRight,
	StyledImages,
	StyledTextUl,
	StyledImagesContainer,
	StyledName,
	StyledText,
} from './styles';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

const Description = ({
	isReverse,
	imgSrc,
	isRight,
	isMarker,
	textRight,
	name,
	text,
	firstLi,
	secondLi,
	thirdLi,
}) => {
	const imgStyle = {
		width: '100%',
		height: '100%',
	};
	return (
		<div>
			{isReverse ? (
				<div>
					<StyledDescription>
						{isRight ? (
							<StyledImagesContainerRight>
								<img
									className={StyledImages}
									style={imgStyle}
									src={imgSrc}
									alt=""
								/>
							</StyledImagesContainerRight>
						) : (
							<StyledImagesContainer>
								<img
									className={StyledImages}
									style={imgStyle}
									src={imgSrc}
									alt=""
								/>
							</StyledImagesContainer>
						)}
						{textRight ? (
							<StyledTextRight>
								<StyledName>
									<h2>{name}</h2>
								</StyledName>
								<StyledText>
									<p>{text}</p>
								</StyledText>
								<Button text="More" type="button" onClick={() => 'ds'} />
							</StyledTextRight>
						) : (
							<div>
								<StyledName>
									<h2>{name}</h2>
								</StyledName>
								<StyledText>
									<p>{text}</p>
								</StyledText>
								<Button text="More" type="button" onClick={() => 'ds'} />
							</div>
						)}
					</StyledDescription>
				</div>
			) : (
				<div>
					<StyledDescription>
						<div>
							<StyledName>
								<h2>{name}</h2>
							</StyledName>
							{isMarker ? (
								<StyledTextUl>
									<li>{firstLi}</li>
									<li>{secondLi}</li>
									<li>{thirdLi}</li>
								</StyledTextUl>
							) : (
								<StyledText>
									<p>{text}</p>
								</StyledText>
							)}
							<Button text="More" type="button" onClick={() => 'ds'} />
						</div>
						{isRight ? (
							<StyledImagesContainerRight>
								<img
									className={StyledImages}
									style={imgStyle}
									src={imgSrc}
									alt=""
								/>
							</StyledImagesContainerRight>
						) : (
							<StyledImagesContainer>
								<img
									className={StyledImages}
									style={imgStyle}
									src={imgSrc}
									alt=""
								/>
							</StyledImagesContainer>
						)}
					</StyledDescription>
				</div>
			)}
		</div>
	);
};

Description.propTypes = {
	isRight: PropTypes.bool.isRequired,
	isReverse: PropTypes.bool.isRequired,
	isMarker: PropTypes.bool.isRequired,
	textRight: PropTypes.bool.isRequired,
	imgSrc: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	firstLi: PropTypes.string.isRequired,
	secondLi: PropTypes.string.isRequired,
	thirdLi: PropTypes.string.isRequired,
};

export default Description;
