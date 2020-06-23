import LayoutContainer from '../../LayoutContainer/LayoutContainer';

import React from 'react';
import Slider from 'react-slick';
import { LogosCompanyCooperationWith, WrapperLogos } from './style';

const logoCompany = [
	'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/jpmorganchase.png?auto=format&q=60&fit=max&w=930',
	'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/chase-logo.png?auto=format&q=60&fit=max&w=930',
	'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/johnson-johnson.png?auto=format&q=60&fit=max&w=930',
	'https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/07/tencent_logo-e1563769659846.jpg?auto=format&q=60&fit=max&w=930',
	'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/Berkshire-Hathaway-Logo.png?auto=format&q=60&fit=max&w=930',
	'https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/amazon-current.png?auto=format&q=60&fit=max&w=930',
];

const CooperationsWithUs = () => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,
		autoplaySpeed: 3000,
		cssEase: 'linear',
	};

	return (
		<WrapperLogos>
			<LayoutContainer>
				<Slider {...settings}>
					{logoCompany.map(item => {
						return <LogosCompanyCooperationWith src={item} />;
					})}
				</Slider>
			</LayoutContainer>
		</WrapperLogos>
	);
};

export default CooperationsWithUs;
