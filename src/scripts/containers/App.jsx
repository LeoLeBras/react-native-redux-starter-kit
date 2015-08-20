import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import SampleApp from 'SampleApp';
import { store } from 'configStore';

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
