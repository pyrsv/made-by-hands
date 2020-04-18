import React, { useEffect, Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import { getItemsAction } from '../../../store/actions/getItemsAction';
import { ProductCardContainer } from './styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", background: "red" }}
		onClick={onClick}
	  />
	);
  }
  
  function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
	  <div
		className={className}
		style={{ ...style, display: "block", background: "green" }}
		onClick={onClick}
	  />
	);
  }


 const MultipleItems = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getItemsAction());
	}, [dispatch]);

	const items = useSelector(state => state.itemsReducer.items);
	const shuffled = items.sort(() => 0.5 - Math.random());
	const selected = shuffled.slice(0, 4);


    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
	  slidesToScroll: 3,
	  nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2> Multiple items </h2>
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
      </div>
    );
  }

  export default MultipleItems


const Multicarousel = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getItemsAction());
	}, [dispatch]);

	const items = useSelector(state => state.itemsReducer.items);
	const shuffled = items.sort(() => 0.5 - Math.random());
	const selected = shuffled.slice(0, 4);

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
			slidesToSlide: 3, // optional, default to 1.
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
			slidesToSlide: 2, // optional, default to 1.
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
			slidesToSlide: 1, // optional, default to 1.
		},
	};
	return (
		<div>
			<Carousel
				responsive={responsive}
				swipeable={false}
				draggable={false}
				showDots
				ssr // means to render carousel on server-side.
				infinite
				autoPlaySpeed={1000}
				keyBoardControl
				customTransition="all .5"
				transitionDuration={500}
				containerClass="carousel-container"
				removeArrowOnDeviceType={['tablet', 'mobile']}
				dotListClass="custom-dot-list-style"
				itemClass="carousel-item-padding-10-px"
			>
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
			</Carousel>
		</div>
	);
};

// export default Multicarousel;
