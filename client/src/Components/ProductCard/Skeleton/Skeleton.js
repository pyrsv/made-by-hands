import React from 'react';
import { Wrapper, SkeletonImage, SkeletonLine } from './styles';

const CardSkeleton = () => (
	<Wrapper>
		<SkeletonImage />
		<SkeletonLine width="70%" />
		<SkeletonLine width="100%" />
	</Wrapper>
);

export default CardSkeleton;
