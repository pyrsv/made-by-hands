import React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from 'prop-types';
import './style.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss';

const DescriptionPageCarousel = ({ imageUrls }) => {
	const images = imageUrls.map(image => {
		return {
			original: `${image}`,
			thumbnail: `${image}`,
		};
	});

	return (
		<>
			<ImageGallery
				items={images}
				showPlayButton={false}
				thumbnailPosition="left"
				showFullscreenButton={false}
			/>
		</>
	);
};

DescriptionPageCarousel.propTypes = {
	imageUrls: PropTypes.instanceOf(Array).isRequired,
};

export default DescriptionPageCarousel;
