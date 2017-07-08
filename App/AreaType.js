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
var height = Dimensions.get('window').height

class AreaType extends Component {

  constructor() {
      super();
  }

  render() {
      return (
        <View style={{flex:1}}>
          <View style={styles.titleContainer1}>
            <Text style={styles.title1}>Mesas: </Text>
          </View>
          <View style={styles.titleContainer2}>
            <Text style={styles.title2}>Mesas: </Text>
          </View>
        </View>
    );
  };
}

const styles  = StyleSheet.create({
    mainContainer : {
      backgroundColor : '#e1a9a9',
    },
    titleContainer1 : {
      justifyContent:'center',
      backgroundColor: '#CCCCFF',
      height: height*.5
    },
    title1: {
      fontSize: 40,
      justifyContent:'center',
      backgroundColor: '#0000FF',
    },
    titleContainer2 : {
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: '#0000FF',
      height: height*.5
    },
    title2: {
      fontSize: 40,
      justifyContent:'center',
      backgroundColor: '#0000FF',
    }
});

export default AreaType;
