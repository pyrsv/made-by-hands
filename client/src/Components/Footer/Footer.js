import React from 'react';

import InputField from '../UI/InputFiels/InputField';
import Button from '../UI/Button/Button';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

import { FooterContainer , Foot , FootLine } from './style';


import { FooterText } from './FooterText/FooterText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '../UI/Button/styles';

const Footer = () => {
	return (
		<Foot height="445px">
			<LayoutContainer>
				<FooterContainer height="200px">
					<Foot height="100%">
						<FooterText
							type="title"
							marginBottom="35px"
							text="Subscribe and get first all the best!"
						/>
						<InputField placeholder="Enter your email " />
						<Button text="Send" color="light" icon="envelope" />
					</Foot>

					<Foot height="100%">
						<Foot>
							<FooterText type="title" text="Partners" />
							<FooterText type="link" text="Cooperation with us" />
							<FooterText type="link" text="Corporate orders" />
						</Foot>
						<Foot>
							<FooterText type="title" text="Help" />
							<FooterText type="link" text="Deliver and payment" />
							<FooterText type="link" text="Exchange or refund" />
						</Foot>
					</Foot>
					<Foot height="100%">
						<FooterText text="Stay connected" />
						<FooterContainer>
							<FooterText>
								<FontAwesomeIcon icon={['fas', 'envelope']} />
							</FooterText>

							<Icon>
								<FontAwesomeIcon icon={['fab', 'envelope']} />
							</Icon>
						</FooterContainer>
						<FooterText text="Making payments" />
					</Foot>
				</FooterContainer>
			</LayoutContainer>
			<LayoutContainer>
				<FootLine />
				<FooterText type="copy" text="© 2020 | all rights reserved" />
			</LayoutContainer>
		</Foot>
	);
};

export default Footer;
