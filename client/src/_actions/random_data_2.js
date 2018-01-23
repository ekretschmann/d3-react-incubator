export function random_data_2_errored(bool) {
    return {
        type: 'RANDOM_DATA_2_HAS_ERRORED',
        hasErrored: bool ? true : false
    };
}

export function random_data_2_loading(bool) {
    return {
        type: 'RANDOM_DATA_2_IS_LOADING',
        isLoading: bool
    };
}

export function random_data_2_updated(items) {
    return {
        type: 'RANDOM_DATA_2_UPDATED',
        items
    };
}
