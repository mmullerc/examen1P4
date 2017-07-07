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
          <View style={styles.container}>
            <Text style={styles.title}>Mesas: </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.title}>Mesas: </Text>
          </View>
        </View>
    );
  };
}

const styles  = StyleSheet.create({
    mainContainer : {
      backgroundColor : '#e1a9a9',
    },
    title : {
      fontSize: 40,
      justifyContent:'center',
      alignItems:'center',
      textAlign: 'center',
      marginTop: 150,
      marginBottom: 15
    },
    subtractButtonContainer : {
      backgroundColor: 'green',
      width: 60,
      height: 60,
      justifyContent: 'center',
      backgroundColor: '#ffffff'
    },
    addButtonContainer : {
      backgroundColor: 'green',
      width: 60,
      height: 60,
      justifyContent: 'center',
      backgroundColor: '#ffffff'
    },
    numberOfTables : {
      fontSize: 40
    },
    numOfTablesContainer: {
      marginLeft: 60,
      marginRight: 60
    },
    nextButton : {
       marginTop: 'auto',
       flexDirection: 'row',
       justifyContent: 'center',
       alignItems: 'center',
       height: 65,
       backgroundColor: '#f9eeee'
    }
});

export default AreaType;
