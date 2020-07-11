/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LoginScreen from './ts/LoginScreen/LoginScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginScreen);
