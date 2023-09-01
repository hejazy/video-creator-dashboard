import { combineReducers } from 'redux';
import { errorHanlder } from '../redux/ErrorHandler';

let rootReducer = combineReducers({
  errorHanlder,
});
export default rootReducer;