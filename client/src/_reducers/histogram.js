export function hasErrored(state = false, action) {
    switch (action.type) {
        case 'HISTOGRAM_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case 'HISTOGRAM_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function data(state = [], action) {
    switch (action.type) {
        case 'HISTOGRAM_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}