import React, { Component } from 'react';

import { StackNavigator } from "react-navigation";
import AreaType from './AreaType';
import App from './App';


const stackNavigatorConfiguration = {
    initialRouteName:'Home',
    headerMode: 'float',
    navigationOptions: {
      title: 'Restaurante'
    }
}

export default AppNavigator = StackNavigator(
  {
    Home: { screen: App },
    AreaType: { screen: AreaType }
  }, stackNavigatorConfiguration);
