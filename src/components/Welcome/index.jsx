import React, { Text, View, StyleSheet } from 'react-native';

const Welcome = () => (
    <View style={ styles.container }>
        <Text style={ styles.welcome }>
            React Native Redux Starter Kit
        </Text>
        <Text style={ styles.instructions }>
            Edit ./src/component/Welcome/index.jsx{'\n'}
            to get started.
        </Text>
        <Text style={ styles.instructions }>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
        </Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 10
    }
});

export default Welcome;
