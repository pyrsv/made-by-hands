import React from 'react';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import { StyledWhyWe } from './styles';
import Title from '../UI/Title/title';
import WhyWeContainer from './WhyWeContainer/WhyWeContainer';

const WhyWe = () => {
	return (
		<StyledWhyWe>
			<LayoutContainer>
				<Title text="Why We" color="dark" />
				<WhyWeContainer name="dwad" description="dwad" />
			</LayoutContainer>
		</StyledWhyWe>
	);
};

export default WhyWe;
