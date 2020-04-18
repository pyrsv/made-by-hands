import React, { useEffect, Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import { getItemsAction } from '../../../store/actions/getItemsAction';
import { ProductCardContainer } from './styles';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';
import { ProductCarouselContainer } from '../ProductsCarousel/styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from 'react-slick';

const SampleNextArrow = props => {
	const { onClick } = props;
	return (
		<div
			className="slick-arrow"
			style={{
				display: 'inlineBlock',
				position: 'absolute',
				bottom: '45%',
				padding: '10px',
				width: '10px',
				left: '100%',
			}}
			onClick={onClick}
		>
			<FontAwesomeIcon
				size="2x"
				icon={['fas', 'chevron-circle-right']}
			></FontAwesomeIcon>
		</div>
	);
};

const SamplePrevArrow = props => {
	const { onClick } = props;
	return (
		<div
			className="slick-arrow"
			style={{
				display: 'inlineBlock',
				position: 'absolute',
				padding: '10px',
				width: '10px',
				top: '45%',
				right: '105%',
			}}
			onClick={onClick}
		>
			<FontAwesomeIcon
				size="2x"
				icon={['fas', 'chevron-circle-left']}
			></FontAwesomeIcon>
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
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 654,
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
			<LayoutContainer>
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
		</div>
	);
};

export default ProductCarousel;
