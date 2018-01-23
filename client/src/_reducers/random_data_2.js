export function random_data_2_errored(state = false, action) {
    switch (action.type) {
        case 'RANDOM_DATA_2_HAS_ERRORED':
            return action;

        default:
            return state;
    }
}

export function random_data_2_loading(state = false, action) {
    switch (action.type) {
        case 'RANDOM_DATA_2_IS_LOADING':
            return action;

        default:
            return state;
    }
}

export function random_data_2_updated(state = [], action) {
    switch (action.type) {
        case 'RANDOM_DATA_2_UPDATED':
            return action;
        default:
            return state;
    }
}