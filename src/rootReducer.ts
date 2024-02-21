import { combineReducers } from 'redux';
import choreAppSlice from './CounterSlice';

export default combineReducers({
    counter: choreAppSlice,
});