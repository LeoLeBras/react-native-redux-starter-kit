import React, { Component } from 'react-native';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux/native';
import * as reducers from 'reducers/index';
import SampleApp from 'SampleApp';

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
