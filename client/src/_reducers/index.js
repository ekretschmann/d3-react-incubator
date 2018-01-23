import { combineReducers } from 'redux';
import { data, hasErrored, isLoading } from './histogram';

export default combineReducers({
    data,
    hasErrored,
    isLoading
});