import React from 'react';

import InputField from '../UI/InputFiels/InputField';
import Button from '../UI/Button/Button';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

import { FooterContainer, Step, FootLine, IconSocNet } from './style';
import { FooterText } from './FooterText/FooterText';

const Footer = () => {
	return (
		<Step>
			<LayoutContainer>
				<FooterContainer>
					<Step width="calc(100/3)" minHeight="200px" padding="5%">
						<FooterText
							type="title"
							marginBottom="35px"
							text="Subscribe and get first all the best!"
						/>
						<InputField placeholder="Enter your email " />
						<Button text="Send" color="light" icon="envelope" />
					</Step>

					<Step minHeight="100%" width="calc(100%/3)" padding="5%">
						<Step alignItems="baseline" marginBottom="15px">
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
						</Step>
						<Step alignItems="baseline">
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
						</Step>
					</Step>
					<Step
						alignItems="baseline"
						width="calc(100%/3)"
						padding="5%"
						minHeight="200px"
					>
						<FooterText text="Stay connected" />
						<FooterContainer>
							<IconSocNet
								href="https://www.instagram.com/"
								backgroundImg="url(https://pngimage.net/wp-content/uploads/2018/06/social-icons-png-vk-4.png)"
								backgroundPoss="337px 183px;"
							/>
							<IconSocNet
								href="https://www.facebook.com/"
								backgroundImg="url(https://pngimage.net/wp-content/uploads/2018/06/social-icons-png-vk-4.png)"
								backgroundPoss="302px 253px;"
							/>
							<IconSocNet
								href="https://twitter.com/explore"
								backgroundImg="url(https://pngimage.net/wp-content/uploads/2018/06/social-icons-png-vk-4.png)"
								backgroundPoss="232px 253px"
							/>
							<IconSocNet
								href="https://vk.com/"
								backgroundImg="url(https://pngimage.net/wp-content/uploads/2018/06/social-icons-png-vk-4.png)"
								backgroundPoss="337px 253px;"
							/>
							<IconSocNet
								href="https://www.pinterest.com/"
								backgroundImg="url(https://pngimage.net/wp-content/uploads/2018/06/social-icons-png-vk-4.png)"
								backgroundPoss="232px 218px"
							/>
						</FooterContainer>
						<FooterText text="Making payments" />
						<FooterContainer>
							<IconSocNet
								width="180px"
								backgroundImg="url(https://edanadom.sumy.ua/assets/images/online.png)"
								backgroundSize="cover"
								backgroundRepeat="no-repeat"
							/>
						</FooterContainer>
					</Step>
				</FooterContainer>
			</LayoutContainer>
			<LayoutContainer>
				<FootLine />
				<FooterText type="copy" text="© 2020 | all rights reserved" />
			</LayoutContainer>
		</Step>
	);
};

export default Footer;
