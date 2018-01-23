export function random_data_1_errored(bool) {
    return {
        type: 'RANDOM_DATA_1_HAS_ERRORED',
        hasErrored: bool
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

export function random_data_1_poll() {

    const url = 'http://localhost:3001/data';
    return (dispatch) => {
        dispatch(random_data_1_loading(true));

        const poll = (url) => {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }

                    dispatch(random_data_1_loading(false));
                    return response;
                })
                .then((response) => response.json())
                .then((items) => dispatch(random_data_1_updated(items)))
                .catch(() => dispatch(random_data_1_errored(true)));
        }

        poll(url);
        setInterval(function () { // <- L
            poll(url);
        }, 5000);

    };
}