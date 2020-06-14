import { Column, Image, Grid, Text, Title } from './styles';
import React from 'react';
import Img from '../../../assets/images/whyWe/1.png';
import Img2 from '../../../assets/images/whyWe/2.png';
import Img3 from '../../../assets/images/whyWe/3.png';
import Img4 from '../../../assets/images/whyWe/4.png';
import Img5 from '../../../assets/images/whyWe/5.png';
import Img6 from '../../../assets/images/whyWe/6.png';

const WhyWeContainer = () => {
	return (
		<Grid>
			<Column>
				<Image>
					<img src={Img} alt="img" />
				</Image>
				<Title>Extremely</Title>
				<Text>unique leather and wood accessories made entirely by hand!</Text>
			</Column>
			<Column>
				<Image>
					<img src={Img2} alt="img" />
				</Image>
				<Title>Free</Title>
				<Text>delivery from 1699 UAH!</Text>
			</Column>
			<Column>
				<Image>
					<img src={Img3} alt="img" />
				</Image>
				<Title>Delivery</Title>
				<Text>
					and manufacture of your order within 1-6 days from the date of
					registration
				</Text>
			</Column>
			<Column>
				<Image>
					<img src={Img4} alt="img" />
				</Image>
				<Title>Individual</Title>
				<Text>approach to each to the customer!</Text>
			</Column>
			<Column>
				<Image>
					<img src={Img5} alt="img" />
				</Image>
				<Title>6 years</Title>
				<Text>we set handmade trends in Ukraine!</Text>
			</Column>
			<Column>
				<Image>
					<img src={Img6} alt="img" />
				</Image>
				<Title>Warranty</Title>
				<Text>up to 3 years for all Made by Hands products</Text>
			</Column>
		</Grid>
	);
};

export default WhyWeContainer;
