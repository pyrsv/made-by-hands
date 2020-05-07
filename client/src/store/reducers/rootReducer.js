import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
import { authReducer } from './authReducer';
import { catalogReducer } from './catalogReducer';
import { cartReducer } from './cartReducer';
import { UIReducer } from './UIReducer';
import { filtersReducer } from './filtersReducer';

const rootReducer = combineReducers({
	itemsReducer,
	auth: authReducer,
	catalog: catalogReducer,
	cartReducer,
	UI: UIReducer,
	filters: filtersReducer,
});

export default rootReducer;
