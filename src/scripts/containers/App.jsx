import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { store } from 'configStore';
import Router, { Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import { routes } from 'routes';
import { reduxRouteComponent } from 'redux-react-router';

export default class App extends Component{

    /**
     * Render
     *
     * @return JSX
     */
    renderDevTools(){
        if(__DEBUG__){
            const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react');

            return (
                <DebugPanel top right bottom>
                    <DevTools store={ store } monitor={LogMonitor} />
                </DebugPanel>
            );
        }
    }



    /**
     * Render
     *
     * @return JSX
     */
    render(){
        const RouteComponent = reduxRouteComponent(store);

        return (
            <div>
                <Provider store={ store }>
                    {() =>
                        <Router history={ history }>
                            <Route component={ RouteComponent } childRoutes={ routes } />
                        </Router>
                    }
                </Provider>
                { this.renderDevTools() }
            </div>
        );
    }
}
