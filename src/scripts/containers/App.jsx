import React, { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import { store } from 'configStore';
import HelloWorld from 'HelloWorld/';

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
                    <HelloWorld />
                }
            </Provider>
        )
    }
}
