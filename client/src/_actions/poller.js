export function poll(url, data_loading_action, data_error_action, data_update_action, interval) {

    return (dispatch) => {

        const pollUrl = () => {



                fetch(url)
                    .then((response) => {
                        if (!response.ok) {
                           throw Error(response.statusText);

                        }

                        dispatch(data_loading_action(false));
                        return response;
                    })
                    .then((response) => response.json())
                    .then((items) => dispatch(data_update_action(items)))
                    .catch((error) => {
                    console.log(error);
                        dispatch(data_error_action(true))
                    });
        };


            pollUrl();

        setInterval(function () {
            pollUrl();
        }, interval);

    };
}