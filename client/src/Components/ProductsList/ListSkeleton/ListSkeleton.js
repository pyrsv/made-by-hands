import React from 'react';
import Skeleton from '../../ProductCard/Skeleton/Skeleton';
import { ProductsContainer } from '../styles';

const ListSkeleton = () => (
	<ProductsContainer>
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
		<Skeleton />
	</ProductsContainer>
);

export default ListSkeleton;
