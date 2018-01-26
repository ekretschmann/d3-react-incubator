


export function data_sort_expense(state, action) {

    switch (action.type) {
        case 'DATA_SORT_EXPENSE':
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

export function data_sort_category(state, action) {
    switch (action.type) {
        case 'DATA_SORT_CATEGORY':
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


export function data_sort_clear(state, action) {
    switch (action.type) {
        case 'DATA_SORT_CLEAR':
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