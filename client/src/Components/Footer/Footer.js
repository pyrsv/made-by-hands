import React from 'react';
import InputField from '../UI/InputFiels/InputField';
import { Foot } from './style';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import { FootLine } from './Copyright/Footline';
import { FooterText } from './FooterText/FooterText';
import Button from '../UI/Button/Button';

const Footer = () => {
	return (
		<Foot>
			<LayoutContainer>
				<div>
                    <FooterText text={'Подписывайтесь и получайте первыми все лучшие предложения!'}/> 
					<InputField placeholder={'Введите свой email '} />
                    <Button text={'Отправить'} color={'light'} icon={'f0e0'}/>
				</div>

				<FootLine />

				<FooterText text={'© 2013-2019| все права сохранены'}/>
				
			</LayoutContainer>
		</Foot>
	);
};

export default Footer;
