import React from 'react';
import { StyledPopularCategoriesContainer } from './styles';
import Description from '../Description/Description';

const PopularCategoriesContainer = () => {
	return (
		<StyledPopularCategoriesContainer>
			<Description
				imgSrc="https://res.cloudinary.com/dnorz3pyf/image/upload/v1586801597/wallets/-_jkc6kz.jpg"
				imgSrcSecondItem="https://res.cloudinary.com/dnorz3pyf/image/upload/v1586801597/wallets/-_jkc6kz.jpg"
				name="Gift Baskets"
				text={
					'When choosing a gift, how often do we rush from store to store, go through tons of ' +
					'information on websites in search of a worthy gift for a friend, colleague or family member?'
				}
				isRight
				textSecondItem="Handmade designer cosmetic bags and travel bags made of genuine leather.
                               A necessary accessory that can easily accommodate all your cosmetics or wash products,
                               while maintaining its elegance,
                               character and sophisticated design!"
				nameSecondItem="Cosmetic bags"
			/>

			<Description
				textSecondItem="ddawd"
				nameSecondItem="Branded accessories"
				imgSrc="https://res.cloudinary.com/dnorz3pyf/image/upload/v1586801597/wallets/-_jkc6kz.jpg"
				imgSrcSecondItem="https://res.cloudinary.com/dnorz3pyf/image/upload/v1586801597/wallets/-_jkc6kz.jpg"
				name="Business card holders and key holders"
				text={
					'In this section of our site you can buy a wallet for plastic cards: a surprisingly convenient, ' +
					'practical, compact and stylish accessory in which you can store credit cards and discount cards.'
				}
				firstLi="Do you want to surprise employees with an accepted gift?"
				secondLi={
					"Can't you find something special that can please your old partners and help you find new ones?"
				}
				thirdLi="Looking for ways to enhance the corporate spirit of the company?"
				isMarker
				isRight
			/>
		</StyledPopularCategoriesContainer>
	);
};

export default PopularCategoriesContainer;
