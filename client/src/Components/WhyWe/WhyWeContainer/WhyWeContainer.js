import { Column, Grid, Text, Title } from './styles';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WhyWeContainer = () => {
	return (
		<Grid>
			<Column>
				<FontAwesomeIcon size="3x" icon="praying-hands" />
				<Title>Extremely</Title>
				<Text>unique leather and wood accessories made entirely by hand!</Text>
			</Column>
			<Column>
				<FontAwesomeIcon size="3x" icon="gem" />
				<Title>Free</Title>
				<Text>delivery from 1699 UAH!</Text>
			</Column>
			<Column>
				<FontAwesomeIcon size="3x" icon="truck" />
				<Title>Delivery</Title>
				<Text>
					and manufacture of your order within 1-6 days from the date of
					registration
				</Text>
			</Column>
			<Column>
				<FontAwesomeIcon size="3x" icon="user-check" />
				<Title>Individual</Title>
				<Text>approach to each to the customer!</Text>
			</Column>
			<Column>
				<FontAwesomeIcon size="3x" icon="crown" />
				<Title>6 years</Title>
				<Text>we set handmade trends in Ukraine!</Text>
			</Column>
			<Column>
				<FontAwesomeIcon size="3x" icon="medal" />
				<Title>Warranty</Title>
				<Text>up to 3 years for all Made by Hands products</Text>
			</Column>
		</Grid>
	);
};

export default WhyWeContainer;
