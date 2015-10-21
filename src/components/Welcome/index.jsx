import React, { Component, Text, View, StyleSheet } from 'react-native';

export default class Welcome extends Component {

    /**
     * Render
     *
     * @return {jsx}
     */
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.welcome }>
                    React Native Redux Starter Kit
                </Text>
                <Text style={ styles.instructions }>
                    To get started, edit ./src/components/Foo.jsx
                </Text>
                <Text style={ styles.instructions }>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
});