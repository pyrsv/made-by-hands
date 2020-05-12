import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LayoutContainer from '../LayoutContainer/LayoutContainer';
import Title from '../UI/Title/title';
import FilterButtons from './FilterButtons/FilterButtons';
import FilterBar from './FilterBar/FilterBar';
import Drawer from '../UI/Drawer/Drawer';
import ProductsList from '../ProductsList/ProductsList';
import { toggleFilters } from '../../store/actions/UIActions';

import { CatalogContainer, Content } from './styles';

const Catalog = () => {
	const dispatch = useDispatch();
	const isTablet = useSelector(state => state.UI.isHeaderMobile);
	const isFilters = useSelector(state => state.UI.isDrawer);

	return (
		<CatalogContainer>
			<LayoutContainer>
				<Title text="catalog" color="dark" />
				<FilterButtons />
				<Content>
					{isTablet ? (
						isFilters && (
							<Drawer
								onToggle={() => dispatch(toggleFilters())}
								heading="Filters"
							>
								<FilterBar />
							</Drawer>
						)
					) : (
						<FilterBar />
					)}
					<ProductsList />
				</Content>
			</LayoutContainer>
		</CatalogContainer>
	);
};

export default Catalog;
