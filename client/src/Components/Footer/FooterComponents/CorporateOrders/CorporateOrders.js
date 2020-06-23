import React from 'react';

import LayoutContainer from '../../../LayoutContainer/LayoutContainer';
import { TitleText, UsualText, SectionCorporateOrders } from './style';

const CorporateOrders = () => {
	return (
		<LayoutContainer>
			<SectionCorporateOrders>
				<TitleText>Individual and corporate orders</TitleText>
				<UsualText>
					Beautiful handmade leather products from ELLESSE can be changed
					according to your request. Depending on the number of units you want
					to order, we can change the existing product or implement a completely
					new design. We provide similar services starting with one unit!
				</UsualText>
				<img
					src="https://res.cloudinary.com/dnorz3pyf/image/upload/v1592147260/waist%20bags/ellesse/photo_2019-09-11_19-56-48_480x480_nabc08.jpg"
					alt="#"
				/>
				<UsualText>
					We can add your company logo, name, initials, name or phrase. We use
					the traditional hot stamping method. It is more expensive than modern
					laser engraving, but it is much more durable and looks more expensive.
				</UsualText>

				<img
					src="https://res.cloudinary.com/dnorz3pyf/image/upload/v1592147360/waist%20bags/ellesse/eebe4e6ec54fb02ce104a5de84fbf940_480x480_btjcxg.jpg"
					alt="#"
				/>
				<UsualText>
					We had experience working with bulk orders designed specifically for
					our client. Depending on the volume of your order, we can offer
					additional discounts.
				</UsualText>

				<img
					src="https://res.cloudinary.com/dnorz3pyf/image/upload/v1592147378/waist%20bags/ellesse/photo_2019-09-11_19-56-40_480x480_orpywi.jpg"
					alt="#"
				/>
				<UsualText>
					We are open to any inquiries. Please contact us to discuss any
					details.
				</UsualText>
			</SectionCorporateOrders>
		</LayoutContainer>
	);
};

export default CorporateOrders;
