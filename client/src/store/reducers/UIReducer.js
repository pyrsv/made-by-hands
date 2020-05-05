import { TOGGLE_DRAWER, TOGGLE_MODAL } from '../types/UITypes';

const initialState = {
	isModal: false,
	isDrawer: false,
};

const UIReducer = (state = initialState, { type }) => {
	switch (type) {
		case TOGGLE_DRAWER:
			return { ...state, isDrawer: !state.isDrawer };
		case TOGGLE_MODAL:
			return { ...state, isModal: !state.isModal };
		default:
			return state;
	}
};

export default UIReducer;
