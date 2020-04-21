import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
import { authReducer } from './authReducer';
import { infoCarouselReducer } from "./infoCarouselReducer"

const rootReducer = combineReducers({ itemsReducer, auth: authReducer, infoCarouselReducer });

export default rootReducer;
