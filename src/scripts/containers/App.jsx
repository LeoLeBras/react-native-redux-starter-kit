import React, { Component } from 'react-native';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux/native';
import * as reducers from 'reducers/index.jsx';
import SampleApp from 'SampleApp.jsx';

const store = createStore(combineReducers(reducers));

export default class App extends React.Component{

    /**
     * Render
     *
     * @return JSX
     */
    render(){
        return(
            <Provider store={store}>
                {() =>
                    <SampleApp />
                }
            </Provider>
        )
    }
}
