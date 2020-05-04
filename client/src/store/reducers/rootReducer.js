import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
import { authReducer } from './authReducer';
import { catalogReducer } from './catalogReducer';
import { descriptionCardReducer } from './descriptionCardReducer';

const rootReducer = combineReducers({
	itemsReducer,
	auth: authReducer,
	catalog: catalogReducer,
	descriptionCard: descriptionCardReducer,
});

export default rootReducer;
