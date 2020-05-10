import {
	TOGGLE_FILTERS,
	TOGGLE_MODAL,
	TOGGLE_NAV,
	SET_HEADER_MOBILE,
	SET_MOBILE,
	SET_TABLET,
} from '../types/UITypes';

const initialState = {
	isModal: false,
	isFilters: false,
	isNav: false,
	isMobile: false,
	isTablet: false,
	isHeaderMobile: false,
};

export const UIReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case TOGGLE_FILTERS:
			return { ...state, isDrawer: !state.isDrawer };
		case TOGGLE_MODAL:
			return { ...state, isModal: !state.isModal, isNav: false };
		case TOGGLE_NAV:
			return { ...state, isNav: !state.isNav };
		case SET_MOBILE:
			return { ...state, isMobile: payload };
		case SET_TABLET:
			return { ...state, isTablet: payload };
		case SET_HEADER_MOBILE:
			return { ...state, isHeaderMobile: payload };
		default:
			return state;
	}
};
