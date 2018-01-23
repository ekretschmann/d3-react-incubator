import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Histogram from '../Histogram';

import configureStore from '../_store/configureStore';
const store = configureStore();

class App extends Component {
  render() {

    return (

        <div>
            <Provider store={store}>
                <Histogram />
            </Provider>

            <Provider store={store}>
                <Histogram />
            </Provider>
        </div>
    );
  }
}

export default App;
