import { combineReducers } from 'redux';
import { random_data_1_errored, random_data_1_loading, random_data_1_updated } from './random_data_1';

export default combineReducers({
    random_data_1_errored,
    random_data_1_loading,
    random_data_1_updated
});