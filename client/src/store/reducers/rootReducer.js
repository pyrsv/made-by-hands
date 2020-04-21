import {combineReducers} from 'redux'
import {itemsReducer} from "./itemsReducer";
import { infoCarouselReducer } from "./infoCarouselReducer"

 const rootReducer = combineReducers({itemsReducer,infoCarouselReducer});

 export default rootReducer