import { combineReducers } from 'redux';
import catsReducer from './catsReducer';
import { favReducer } from './favReducer';

const reducers = combineReducers({
  catsReducer,
  favReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
