import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import movieReducer from './movieReducer';

const reducer = combineReducers({
  searchReducer,
  movieReducer,
});

export default reducer;