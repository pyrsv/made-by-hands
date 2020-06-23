import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import Button from '../../UI/Button/Button';
import './stylesInfoCarousel.scss';
import {
	CarouselTitle,
	CarouselTextContainer,
	SliderContainer,
	InfoCarouselContainer,
	MinHeightContainer,
} from './styles';

const InfoCarousel = () => {
	const [items, setItems] = useState([]);

	const takeInfo = () => {
		axios.get('/api/slides').then(res => {
			setItems(res.data);
		});
	};

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
		takeInfo();
	}, [setItems]);

	// const changePage = () => {
	// 	window.location.assign('https://www.google.com/');
	// };

	return (
		<InfoCarouselContainer>
			<LayoutContainer>
				{items.length === 0 ? (
					<MinHeightContainer />
				) : (
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
										<NavLink to={item.url}>
											<Button text="More details" onClick={() => {}} />
										</NavLink>
									</CarouselTextContainer>
								</SliderContainer>
							);
						})}
					</Carousel>
				)}
			</LayoutContainer>
		</InfoCarouselContainer>
	);
};

export default InfoCarousel;
