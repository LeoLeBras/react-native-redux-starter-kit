import React, { Component } from 'react-native';
const { View, Text}  = React;

export default class HelloWorld extends Component {

    /** 
     * Render
     *
     * @return {JSX}
     */
    render(){
        return (
            <View>
                <Text style={ styles }>Hello World !</Text>
            </View>
        );
  }
  
}

const styles = {
    display: 'flex',
    top: 30,
    textAlign: 'center'
}