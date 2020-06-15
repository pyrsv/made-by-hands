import React from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

import {
	Wrapper,
	FooterContainer,
	FooterSection,
	FootLine,
	IconSocNet,
	IconPay,
	TitleFooterText,
} from './style';
import { FooterText } from './FooterText/FooterText';
import FooterForm from './FooterComponents/FooterForm';

const Footer = () => {
	return (
		<Wrapper>
			<LayoutContainer>
				<FooterContainer>
					<FooterSection>
						<FooterForm />
					</FooterSection>

					<FooterSection>
						<TitleFooterText>Partners</TitleFooterText>
						<FooterText
							href="/Cooperation_with_us"
							type="link"
							text="Cooperation with us"
						/>
						<FooterText
							href="/Corporate_orders"
							type="link"
							text="Corporate orders"
						/>
						<TitleFooterText>Help</TitleFooterText>

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
						<TitleFooterText>Stay connected</TitleFooterText>

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
						<TitleFooterText>Making payments</TitleFooterText>

						<FooterContainer>
							<IconPay />
						</FooterContainer>
					</FooterSection>
				</FooterContainer>
			</LayoutContainer>
			<LayoutContainer>
				<FootLine />
				<FooterText type="link" text="© 2020 | all rights reserved" />
			</LayoutContainer>
		</Wrapper>
	);
};

export default Footer;
