import { TOGGLE_NAV, TOGGLE_FILTERS, TOGGLE_MODAL } from '../types/UITypes';

export const toggleNav = () => ({
	type: TOGGLE_NAV,
});

export const toggleFilters = () => ({
	type: TOGGLE_FILTERS,
});

export const toggleModal = () => ({
	type: TOGGLE_MODAL,
});
