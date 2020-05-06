import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
import { authReducer } from './authReducer';
import { catalogReducer } from './catalogReducer';
import { cartReducer } from './cartReducer';

const rootReducer = combineReducers({
	itemsReducer,
	auth: authReducer,
	catalog: catalogReducer,
	cartReducer,
});

export default rootReducer;
