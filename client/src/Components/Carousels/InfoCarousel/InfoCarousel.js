import React, { useEffect } from "react";
import LayoutContainer from '../../LayoutContainer/LayoutContainer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector, useDispatch } from 'react-redux';
import { getInfoCarouselAction } from '../../../store/actions/getInfoCarouselAction';
import Button from "../../UI/Button/Button";
import "./stylesInfoCarousel.scss";
import { CarouselTitle, CarouselTextContainer, SliderContainer, InfoCarouselContainer }  from './styles'

const InfoCarousel = () => {
    const dispatch = useDispatch();

    const items = useSelector(state => state.infoCarouselReducer.items);

    const settings = {
        showArrows: false,
        showIndicators: false,
        infiniteLoop: true, 
        showStatus: false,
        useKeyboardArrows: true,
        autoPlay: true,
        emulateTouch: true,
    }

    useEffect(()=>{
        dispatch(getInfoCarouselAction())
    }, [dispatch])

    return (
        <InfoCarouselContainer>
            <LayoutContainer>
                <Carousel {...settings}>
                    {
                        items.map(item => {
                            return  (
                                <SliderContainer key={item.id}>
                                    <img className="sliderIMG" alt={item.customId} src={item.imageUrl}/>
                                    <CarouselTextContainer>
                                        <CarouselTitle>
                                            {item.title} 
                                        </CarouselTitle>
                                        <Button text="More details" />
                                    </CarouselTextContainer>
                                </SliderContainer>
                            )
                        })
                    }
                </Carousel>
            </LayoutContainer>
        </InfoCarouselContainer>
    )
}

export default InfoCarousel;