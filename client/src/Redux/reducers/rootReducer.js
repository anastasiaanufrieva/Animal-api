import { combineReducers } from 'redux';
import animalReducer from './animalReducer';
import favouriteReducer from './favouriteReducer';

const rootReducer = combineReducers({
animal: animalReducer,
favourites: favouriteReducer
});

export default rootReducer;
