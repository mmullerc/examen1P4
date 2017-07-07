import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
  ScrollView
} from 'react-native';

var width = Dimensions.get('window').width

class Index extends Component {

    constructor() {
        super();
        this.state = {
            number : 0
        }
    }

    subtractNumber() {
        this.setState(prevState => ({
            number : prevState.number - 1
        }));
    }

    addNumber() {
        this.setState(prevState => ({
            number : prevState.number + 1
        }));
    }

  render() {
      return (
         <View>
        <View style={styles.container}>
            <Text style={styles.title}>Mesas</Text>
          </View>
        <View style={{justifyContent: 'center',flexDirection: 'row'}}>
            <Button
              onPress={this.subtractNumber.bind(this)}
              title="-"
              accessibilityLabel="-"
              style={styles.substractButton}
            />
            <Text>{this.state.number}</Text>
            <Button
              onPress={this.addNumber.bind(this)}
              title="+"
              accessibilityLabel="+"
              style={styles.addButton}
            />
        </View>
      </View>
      );
  };
}

const styles  = StyleSheet.create({
    title : {
        fontSize: 40,
        justifyContent:'center',
        alignItems:'center',
        textAlign: 'center',
        marginTop: 150
    }
});

export default Index;
