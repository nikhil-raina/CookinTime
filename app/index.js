/* eslint-disable prettier/prettier */
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LoginScreen from './ts/LoginScreen/LoginScreen';
import RegistrationScreen from './ts/RegistrationScreen/RegistrationScreen';
import WelcomeScreen from './ts/WelcomeScreen/WelcomeScreen';
import MainScreen from './ts/MainScreen/MainScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);
