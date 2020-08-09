/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

//Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//Screens
import LoginScreen from './ts/LoginScreen/LoginScreen';
import WelcomeScreen from './ts/WelcomeScreen/WelcomeScreen';
import SignInScreen from './ts/SignInScreen/SignInScreen';
import RegistrationScreen from './ts/RegistrationScreen/RegistrationScreen';
import MainScreen from './ts/MainScreen/MainScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {

  createMainDrawerStack = () =>
  <Drawer.Navigator>
    <Drawer.Screen name="Welcome" component={WelcomeScreen}/>
    <Drawer.Screen name="Login" component={LoginScreen}/>
    <Drawer.Screen name="Sign In" component={SignInScreen}/>
    <Drawer.Screen name="Registration" component={RegistrationScreen}/>
    <Drawer.Screen name="Main" component={MainScreen}/>
  </Drawer.Navigator>;

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator  initialRouteName="Welcome"
                          headerMode="none">
          <Stack.Screen name="Welcome" component={WelcomeScreen}/>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Sign In" component={SignInScreen}/>
          <Stack.Screen name="Registration" component={RegistrationScreen}/>
          <Stack.Screen name="Main" children={this.createMainDrawerStack}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
