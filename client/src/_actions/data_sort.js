
export function data_sort_expense(bool) {
    return {
        type: 'DATA_SORT_EXPENSE',
        selected: bool
    };
}

export function data_sort_category(bool) {
    return {
        type: 'DATA_SORT_CATEGORY',
        selected: bool
    };
}


export function data_sort_clear(bool) {
    return {
        type: 'DATA_SORT_CLEAR',
        selected: bool
    };
}
