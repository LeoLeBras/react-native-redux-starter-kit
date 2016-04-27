import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      React Native Redux Starter Kit
    </Text>
    <Text style={styles.instructions}>
      Edit ./src/component/Welcome/index.jsx{'\n'}
      to get started.
    </Text>
    <Text style={styles.instructions}>
      Press Cmd+R to reload,{'\n'}
      Cmd+D or shake for dev menu
    </Text>
  </View>
);

export default Welcome;
