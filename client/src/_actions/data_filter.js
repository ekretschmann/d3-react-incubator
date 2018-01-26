
export function data_filter_retail(bool) {
    return {
        type: 'DATA_FILTER_RETAIL',
        selected: bool
    };
}

export function data_filter_gas(bool) {
    return {
        type: 'DATA_FILTER_GAS',
        selected: bool
    };
}

export function data_filter_dining(bool) {
    return {
        type: 'DATA_FILTER_DINING',
        selected: bool
    };
}

export function data_filter_clear(bool) {
    return {
        type: 'DATA_FILTER_CLEAR',
        selected: bool
    };
}
