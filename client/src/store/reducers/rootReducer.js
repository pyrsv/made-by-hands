import { combineReducers } from 'redux';
import { carouselArrivalsReducer } from './carouselArrivalsReducer';
import { authReducer } from './authReducer';
import { catalogReducer } from './catalogReducer';
import { cartReducer } from './cartReducer';
import { UIReducer } from './UIReducer';
import { filtersReducer } from './filtersReducer';
import { wishlistReducer } from './wishlistReducer';
import { ratingReducer } from './ratingReducer';
import { ordersReducer } from './ordersReducer';

const rootReducer = combineReducers({
	carouselArrivals: carouselArrivalsReducer,
	auth: authReducer,
	catalog: catalogReducer,
	cartReducer,
	UI: UIReducer,
	filters: filtersReducer,
	wishlistReducer,
	rating: ratingReducer,
	orders: ordersReducer,
});

export default rootReducer;
