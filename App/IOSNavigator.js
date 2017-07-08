import React, { Component } from 'react';

import { StackNavigator } from "react-navigation";
import AreaType from './AreaType';
import Index from './Index';

export default AppNavigator = StackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  Home: {
    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: Index,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.
    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    path: '/',
    // The action and route params are extracted from the path.
    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    }),
  },
  AreaType: {
    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: AreaType,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.
    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    path: '/AreaType',
    // The action and route params are extracted from the path.
    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({navigation}) => ({
      title: 'Area Type',
    }),
  }
});
