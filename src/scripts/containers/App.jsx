import { Component } from 'react-native';
import { Provider } from 'react-redux/native';
import configureStore from 'configStore';
import Welcome from 'Welcome/';
const store = configureStore();

export default class App extends Component{

    /**
     * Render
     *
     * @return {JSX} Render <Provider /> component
     */
    render(){
        return (
            <Provider store={ store }>
                { () => <Welcome /> }
            </Provider>
        );
    }

}
