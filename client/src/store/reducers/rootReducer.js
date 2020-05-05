import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
import { authReducer } from './authReducer';
import { catalogReducer } from './catalogReducer';
import { cartReducer } from './cartReducer';
import { UIReducer } from './UIReducer';

const rootReducer = combineReducers({
	itemsReducer,
	auth: authReducer,
	catalog: catalogReducer,
	cartReducer,
	UI: UIReducer,
});

export default rootReducer;
