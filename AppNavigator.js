import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './Home';
import SearchResultScreen from './SearchResultScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  SearchResultScreen: {
    screen: SearchResultScreen
  }
});

export default createAppContainer(AppNavigator);