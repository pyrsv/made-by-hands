import React from 'react';

import InputField from '../UI/InputFiels/InputField';
import Button from '../UI/Button/Button';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

import {
	Wrapper,
	FooterContainer,
	FooterSection,
	FootLine,
	IconSocNet,
	IconPay,
} from './style';
import { FooterText } from './FooterText/FooterText';

const Footer = () => {
	return (
		<Wrapper>
			<LayoutContainer>
				<FooterContainer>
					<FooterSection>
						<FooterText
							type="title"
							text="Subscribe and get first all the best!"
						/>
						<InputField
							placeholder="Enter your email "
							name="subscription"
							onChange={() => {}}
							type="text"
							target="form"
							value=""
						/>
						<Button
							text="Send"
							color="light"
							icon="envelope"
							onClick={() => {}}
						/>
					</FooterSection>

					<FooterSection>
						<FooterText type="title" text="Partners" />
						<FooterText
							href="/Cooperation"
							type="link"
							text="Cooperation with us"
						/>
						<FooterText
							href="/Corporate_orders"
							type="link"
							text="Corporate orders"
						/>

						<FooterText type="title" text="Help" />
						<FooterText
							href="/Deliver_and_payment"
							type="link"
							text="Deliver and payment"
						/>
						<FooterText
							href="/Exchange_or_refund"
							type="link"
							text="Exchange or refund"
						/>
					</FooterSection>

					<FooterSection>
						<FooterText text="Stay connected" />
						<FooterContainer>
							<IconSocNet
								href="https://www.instagram.com/"
								backgroundPoss="-63px -117px;"
							/>
							<IconSocNet
								href="https://www.facebook.com/"
								backgroundPoss="-98px -47px;"
							/>
							<IconSocNet
								href="https://twitter.com/explore"
								backgroundPoss="-168px -47px"
							/>
							<IconSocNet
								href="https://vk.com/"
								backgroundPoss="-63px -47px;"
							/>
							<IconSocNet
								href="https://www.pinterest.com/"
								backgroundPoss="-168px -82px"
							/>
						</FooterContainer>
						<FooterText text="Making payments" />
						<FooterContainer>
							<IconPay />
						</FooterContainer>
					</FooterSection>
				</FooterContainer>
			</LayoutContainer>
			<LayoutContainer>
				<FootLine />
				<FooterText type="copy" text="© 2020 | all rights reserved" />
			</LayoutContainer>
		</Wrapper>
	);
};

export default Footer;
