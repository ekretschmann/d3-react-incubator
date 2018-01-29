import React, { Component } from 'react';
import { Provider } from 'react-redux';
// import LoadDataFromServer from '../LoadDataFromServer';
// import FunctionsAsData from '../FunctionsAsData';
// import DataFilter from '../DataFilter';
// import DataSort from '../DataSort';
// import CoordinateSystem from '../CoordinateSystem';
import SlidingBarChart from '../SlidingBarChart';



// import { random_data_1_loading, random_data_1_errored, random_data_1_updated } from '../_actions/random_data_1'
// import { random_data_2_loading, random_data_2_errored, random_data_2_updated } from '../_actions/random_data_2'

import './App.css';

import configureStore from '../_store/store';
const store = configureStore();


class App extends Component {
  render() {

    return (

        <div className='container'>

            <SlidingBarChart/>
            {/*<CoordinateSystem/>*/}

            {/*<h1>Data Sort</h1>*/}
            {/*<p>Shows integration with Redux</p>*/}
            {/*<Provider store={store}>*/}
                {/*<DataSort />*/}
            {/*</Provider>*/}

            {/*<h1>Data Filter</h1>*/}
            {/*<p>Shows integration with Redux</p>*/}
            {/*<Provider store={store}>*/}
            {/*<DataFilter />*/}
            {/*</Provider>*/}


            {/*<h1>Loading random data from server at different intervals</h1>*/}
            {/*<p>Shows integration with React and Thunk</p>*/}
            {/*<Provider store={store}>*/}
                {/*<LoadDataFromServer*/}
                    {/*url='http://localhost:3001/random_data'*/}
                    {/*loadingAction= { random_data_1_loading }*/}
                    {/*errorAction= { random_data_1_errored }*/}
                    {/*updateAction= { random_data_1_updated }*/}
                    {/*interval='3000'*/}
                {/*/>*/}
            {/*</Provider>*/}

            {/*<Provider store={store}>*/}
                {/*<LoadDataFromServer*/}
                    {/*url='http://localhost:3001/random_data'*/}
                    {/*loadingAction= { random_data_2_loading }*/}
                    {/*errorAction= { random_data_2_errored }*/}
                    {/*updateAction= { random_data_2_updated }*/}
                    {/*interval='5000'*/}
                {/*/>*/}
            {/*</Provider>*/}

            {/*<h1>Using functions to produce the data for D3</h1>*/}
            {/*<FunctionsAsData />*/}
        </div>
    );
  }
}

export default App;
