import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
	itemsReducer,
	auth: authReducer,
});

export default rootReducer;
