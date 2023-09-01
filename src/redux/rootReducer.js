import { combineReducers } from 'redux';
import { errorHanlder } from '../redux/ErrorHandler';
import { playHandler } from '../redux/play';

let rootReducer = combineReducers({
  errorHanlder,
  playHandler,
});
export default rootReducer;