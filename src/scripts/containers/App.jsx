import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import { store } from 'configStore';
import SampleApp from 'SampleApp';

export default class App extends React.Component{

    /**
     * Render
     *
     * @return JSX
     */
    render(){
        return(
            <Provider store={ store }>
                {() =>
                    <SampleApp />
                }
            </Provider>
        )
    }
}
