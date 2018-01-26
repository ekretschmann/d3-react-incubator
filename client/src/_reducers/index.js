import { combineReducers } from 'redux';
// import { random_data_1_errored, random_data_1_loading, random_data_1_updated } from './random_data_1';
// import { random_data_2_errored, random_data_2_loading, random_data_2_updated } from './random_data_2';
// import { data_filter_retail, data_filter_dining, data_filter_gas, data_filter_clear } from './data_filter';
import { data_sort_category, data_sort_expense, data_sort_clear } from './data_sort';

export default combineReducers({
    // random_data_1_errored,
    // random_data_1_loading,
    // random_data_1_updated,
    // random_data_2_errored,
    // random_data_2_loading,
    // random_data_2_updated,
    // data_filter_retail,
    // data_filter_dining,
    // data_filter_gas,
    // data_filter_clear
    data_sort_category, data_sort_expense, data_sort_clear
});