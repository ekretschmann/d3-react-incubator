export function hasErrored(bool) {
    return {
        type: 'HISTOGRAM_HAS_ERRORED',
        hasErrored: bool
    };
}

export function isLoading(bool) {
    return {
        type: 'HISTOGRAM_IS_LOADING',
        isLoading: bool
    };
}

export function fetchDataSuccess(items) {
    return {
        type: 'HISTOGRAM_FETCH_DATA_SUCCESS',
        items
    };
}

export function fetchData(url) {
    return (dispatch) => {
        dispatch(isLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(isLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(fetchDataSuccess(items)))
            .catch(() => dispatch(hasErrored(true)));
    };
}