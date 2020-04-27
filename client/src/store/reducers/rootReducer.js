import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';
import { authReducer } from './authReducer';
import { infoCarouselReducer } from './infoCarouselReducer';
import { catalogReducer } from './catalogReducer'

const rootReducer = combineReducers({
	itemsReducer,
	auth: authReducer,
	infoCarousel: infoCarouselReducer,
	catalog: catalogReducer,
});

export default rootReducer;
