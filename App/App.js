import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Index from './Index';


class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Index />
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60
  },
});

export default App;
