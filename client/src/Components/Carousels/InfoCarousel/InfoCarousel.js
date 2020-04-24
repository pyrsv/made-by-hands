import React, { useEffect } from 'react';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useSelector, useDispatch } from 'react-redux';
import { getInfoCarouselAction } from '../../../store/actions/getInfoCarouselAction';
import Button from '../../UI/Button/Button';
import './stylesInfoCarousel.scss';
import {
	CarouselTitle,
	CarouselTextContainer,
	SliderContainer,
	InfoCarouselContainer,
} from './styles';

const InfoCarousel = () => {
	const dispatch = useDispatch();

	const items = useSelector(state => state.infoCarousel.items);

	const settings = {
		showArrows: false,
		showIndicators: false,
		infiniteLoop: true,
		showStatus: false,
		useKeyboardArrows: true,
		autoPlay: true,
		emulateTouch: true,
	};

	useEffect(() => {
		dispatch(getInfoCarouselAction());
	}, [dispatch]);

	const changePage = () => {
		window.location.assign('https://www.google.com/');
	};

	return (
		<InfoCarouselContainer>
			<LayoutContainer>
				<Carousel {...settings}>
					{items.map(item => {
						return (
							<SliderContainer key={item.customId}>
								<img
									className="sliderIMG"
									alt={item.customId}
									src={item.imageUrl}
								/>
								<CarouselTextContainer>
									<CarouselTitle>{item.title}</CarouselTitle>
									<Button text="More details" onClick={() => changePage()} />
								</CarouselTextContainer>
							</SliderContainer>
						);
					})}
				</Carousel>
			</LayoutContainer>
		</InfoCarouselContainer>
	);
};

export default InfoCarousel;
