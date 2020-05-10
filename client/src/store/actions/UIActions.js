import {
	TOGGLE_NAV,
	TOGGLE_FILTERS,
	TOGGLE_MODAL,
	SET_HEADER_MOBILE,
	SET_MOBILE,
	SET_TABLET,
} from '../types/UITypes';

export const toggleNav = () => ({
	type: TOGGLE_NAV,
});

export const toggleFilters = () => ({
	type: TOGGLE_FILTERS,
});

export const toggleModal = () => ({
	type: TOGGLE_MODAL,
});

export const setMobile = isMobile => ({
	type: SET_MOBILE,
	payload: isMobile,
});

export const setTablet = isTablet => ({
	type: SET_TABLET,
	payload: isTablet,
});

export const setHeaderMobile = isHeaderMobile => ({
	type: SET_HEADER_MOBILE,
	payload: isHeaderMobile,
});
