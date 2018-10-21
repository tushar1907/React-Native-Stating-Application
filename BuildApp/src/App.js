
import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import Weather from './components/Weather';

export default class App extends React.Component {
  state = {
    isLoading: false
  };

  render() {
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Fetching The Weather</Text> : <Weather />}
      </View>
    );
  }

 styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

}