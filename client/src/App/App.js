import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Histogram from '../Histogram';
import { random_data_1_loading, random_data_1_errored, random_data_1_updated } from '../_actions/random_data_1'

import configureStore from '../_store/store';
const store = configureStore();


class App extends Component {
  render() {

    return (

        <div>
            <Provider store={store}>
                <Histogram
                    url='http://localhost:3001/data'
                    loadingAction= { random_data_1_loading }
                    errorAction= { random_data_1_errored }
                    updateAction= { random_data_1_updated }
                />
            </Provider>

            {/*<Provider store={store}>*/}
                {/*<Histogram />*/}
            {/*</Provider>*/}
        </div>
    );
  }
}

export default App;
