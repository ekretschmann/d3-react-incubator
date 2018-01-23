import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Histogram from '../Histogram';
import { random_data_1_loading, random_data_1_errored, random_data_1_updated } from '../_actions/random_data_1'
import { random_data_2_loading, random_data_2_errored, random_data_2_updated } from '../_actions/random_data_2'

import configureStore from '../_store/store';
const store = configureStore();


class App extends Component {
  render() {

    return (

        <div>
            <Provider store={store}>
                <Histogram
                    url='http://localhost:3001/random_data'
                    loadingAction= { random_data_1_loading }
                    errorAction= { random_data_1_errored }
                    updateAction= { random_data_1_updated }
                    interval='3000'
                />
            </Provider>

            <Provider store={store}>
                <Histogram
                    url='http://localhost:3001/random_data'
                    loadingAction= { random_data_2_loading }
                    errorAction= { random_data_2_errored }
                    updateAction= { random_data_2_updated }
                    interval='5000'
                />
            </Provider>
        </div>
    );
  }
}

export default App;
