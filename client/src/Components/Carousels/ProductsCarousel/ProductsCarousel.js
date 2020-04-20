import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import { getItemsAction } from '../../../store/actions/getItemsAction';
import {
	ProductCardContainer,
	ProductCarouselContainer,
	NewArrivalsBackground,
	NewArrivals,
} from './styles';
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

const ProductCarousel = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getItemsAction());
	}, [dispatch]);

	const items = useSelector(state => state.itemsReducer.items);
	const shuffled = items.sort(() => 0.5 - Math.random());
	const selected = shuffled.slice(0, 4);
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
					<NewArrivals>new arrivals</NewArrivals>
					<ProductCarouselContainer>
						<Slider {...settings}>
							{selected.map(item => {
								return (
									<>
										<ProductCardContainer>
											<ProductCard
												key={item.name}
												name={item.name}
												img={item.imageUrls[0]}
												price={item.currentPrice}
											/>
										</ProductCardContainer>
									</>
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
	onClick: PropTypes.func.isRequired,
	onKeyUp: PropTypes.func.isRequired,
};
SamplePrevArrow.propTypes = {
	onClick: PropTypes.func.isRequired,
	onKeyUp: PropTypes.func.isRequired,
};

export default ProductCarousel;
