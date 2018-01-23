export function random_data_1_errored(state = false, action) {
    switch (action.type) {
        case 'RANDOM_DATA_1_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function random_data_1_loading(state = false, action) {
    switch (action.type) {
        case 'RANDOM_DATA_1_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function random_data_1_updated(state = [], action) {
    switch (action.type) {
        case 'RANDOM_DATA_1_UPDATED':
            return action;
        default:
            return state;
    }
}