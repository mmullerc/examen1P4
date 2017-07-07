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

  static navigationOptions = {
   title: 'Home',
 }

    constructor(props, context){
      super(props, context);
      this.state = {
          number : 0
      }
    }

    subtractNumber() {
      var numToSubtract;

      if (this.state.number == 0) {
        numToSubtract = 0
      } else {
        numToSubtract = 1
      }

        this.setState(prevState => ({
            number : prevState.number - numToSubtract
        }));
    }

    addNumber() {
        this.setState(prevState => ({
            number : prevState.number + 1
        }));
    }

  render() {
      return (
        <View style={{flex:1}}>
          <ScrollView style={styles.mainContainer}>
            <View style={styles.container}>
              <Text style={styles.title}>Mesas: </Text>
            </View>
            <View style={{justifyContent: 'center',flexDirection: 'row'}}>
              <View style={styles.subtractButtonContainer}>
                <Button
                  onPress={this.subtractNumber.bind(this)}
                  title={"-"}
                  accessibilityLabel="-"
                  style={styles.substractButton}
                  color='#969292'
                />
              </View>
              <View style={styles.numOfTablesContainer}>
                <Text style={styles.numberOfTables}>{this.state.number}</Text>
              </View>
              <View style={styles.addButtonContainer}>
                <Button
                  onPress={this.addNumber.bind(this)}
                  title={"+"}
                  accessibilityLabel="+"
                  style={styles.addButton}
                  color='#969292'
                />
            </View>
          </View>
        </ScrollView>
        <View style={styles.nextButton}>
          <Button
            onPress={() => this.props.navigation.navigate('AreaType')}
            title={"Empezar"}
            accessibilityLabel="+"
            color='#969292'
          />
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

export default Index;
