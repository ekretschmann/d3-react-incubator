


export function data_filter_retail(state, action) {

    switch (action.type) {
        case 'DATA_FILTER_RETAIL':
            return {
                type: action.type,
                value: true
            };

        default:
            return {
                type: action.type,
                value: false
            };
    }
}

export function data_filter_gas(state, action) {
    switch (action.type) {
        case 'DATA_FILTER_GAS':
            return {
                type: action.type,
                value: true
            };

        default:
            return {
                type: action.type,
                value: false
            };
    }
}

export function data_filter_dining(state, action) {
    switch (action.type) {
        case 'DATA_FILTER_DINING':
            return {
                type: action.type,
                value: true
            };

        default:
            return {
                type: action.type,
                value: false
            };
    }
}

export function data_filter_clear(state, action) {
    switch (action.type) {
        case 'DATA_FILTER_CLEAR':
            return {
                type: action.type,
                value: true
            };

        default:
            return {
                type: action.type,
                value: false
            };
    }
}