export function random_data_1_errored(bool) {
    return {
        type: 'RANDOM_DATA_1_HAS_ERRORED',
        hasErrored: bool ? true : false
    };
}

export function random_data_1_loading(bool) {
    return {
        type: 'RANDOM_DATA_1_IS_LOADING',
        isLoading: bool
    };
}

export function random_data_1_updated(items) {
    return {
        type: 'RANDOM_DATA_1_UPDATED',
        items
    };
}
