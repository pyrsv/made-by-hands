/* eslint-disable react/require-default-props */
import React, { memo } from 'react';
import PropTypes, { object } from 'prop-types';
import ProductCard from '../../ProductCard/ProductCard';
import {
	ProductCardContainer,
	ProductCarouselContainer,
	NewArrivalsBackground,
} from './styles';
import Title from '../../UI/Title/title';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';

const SampleNextArrow = props => {
	const { onClick, onKeyUp } = props;
	return (
		<div
			role="button"
			tabIndex="0"
			className="slick-arrow"
			style={{
				display: 'inlineBlock',
				position: 'absolute',
				bottom: '45%',
				padding: '10px',
				width: '10px',
				left: '100.5%',
				zIndex: '99',
			}}
			onClick={onClick}
			onKeyUp={onKeyUp}
		>
			<FontAwesomeIcon size="2x" icon={['fas', 'chevron-circle-right']} />
		</div>
	);
};

const SamplePrevArrow = props => {
	const { onClick, onKeyUp } = props;
	return (
		<div
			role="button"
			tabIndex="0"
			className="slick-arrow"
			style={{
				display: 'inlineBlock',
				position: 'absolute',
				padding: '10px',
				width: '10px',
				top: '45%',
				right: '102.4%',
				zIndex: '99',
			}}
			onClick={onClick}
			onKeyUp={onKeyUp}
		>
			<FontAwesomeIcon size="2x" icon={['fas', 'chevron-circle-left']} />
		</div>
	);
};

const ProductCarousel = ({ selected }) => {
	const settings = {
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					arrows: false,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
				},
			},
		],
	};

	return (
		<div>
			<NewArrivalsBackground>
				<LayoutContainer>
					<Title text="new arrivals" />
					<ProductCarouselContainer>
						<Slider {...settings}>
							{selected.map(item => {
								return (
									<div key={item._id}>
										<ProductCardContainer>
											<ProductCard
												// onAddToCart={onAddToCart}
												id={item._id}
												itemNo={item.itemNo}
												name={item.name}
												img={item.imageUrls[0]}
												price={item.currentPrice}
												isFavorite={item.isFavorite}
												isInCart={item.isInCart}
											/>
										</ProductCardContainer>
									</div>
								);
							})}
						</Slider>
					</ProductCarouselContainer>
				</LayoutContainer>
			</NewArrivalsBackground>
		</div>
	);
};

SampleNextArrow.propTypes = {
	onClick: PropTypes.func,
	onKeyUp: PropTypes.func,
};
SamplePrevArrow.propTypes = {
	onClick: PropTypes.func,
	onKeyUp: PropTypes.func,
};

ProductCarousel.propTypes = {
	selected: PropTypes.arrayOf(object),
};

export default memo(ProductCarousel);
