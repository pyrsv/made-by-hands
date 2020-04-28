import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
import { authReducer } from './authReducer';
import { catalogReducer } from './catalogReducer';

const rootReducer = combineReducers({
	itemsReducer,
	auth: authReducer,
	catalog: catalogReducer,
});

export default rootReducer;
