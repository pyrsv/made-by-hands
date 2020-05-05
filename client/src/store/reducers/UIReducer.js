import { TOGGLE_FILTERS, TOGGLE_MODAL, TOGGLE_NAV } from '../types/UITypes';

const initialState = {
	isModal: false,
	isFilters: false,
	isNav: false,
};

export const UIReducer = (state = initialState, { type }) => {
	switch (type) {
		case TOGGLE_FILTERS:
			return { ...state, isDrawer: !state.isDrawer };
		case TOGGLE_MODAL:
			return { ...state, isModal: !state.isModal, isNav: false };
		case TOGGLE_NAV:
			return { ...state, isNav: !state.isModal };
		default:
			return state;
	}
};
