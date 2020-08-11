/* eslint-disable prettier/prettier */
/**
 * @providesModule WelcomeScreen
 * @flow
 */

import React from 'react';
import styles from './WelcomeScreenStyle';
import images from '../CIT-Modules/ImageTree';

import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { ReactPropTypes } from 'react';

interface Props {
  navigation: ReactPropTypes,
}
export default class HomeScreen extends React.Component<Props, {}> {

  constructor(props: any) {
    super(props);
  }

  _navigation = () => {
    this.props.navigation.navigate('Sign In');
  }

  render(): React.ReactElement {
    const background_image = images.WELCOME_BACKGROUND;
    const logo_image = images.LOGO;
    const logo_image_shadow = images.LOGO_SHADOW;
    const appName = 'COOKIN TIME';
    const motoMessage = 'make food wait for you';
    console.log('the props',this.props.navigation);
    return (
      <TouchableOpacity onPress={this._navigation}>
        <ImageBackground  source={background_image}
                          style={styles.backgroundImage}>
          <View style={styles.container}>
              <ImageBackground  source={logo_image_shadow}
                                style={styles.logoStyleShadow}>
                <Image  source={logo_image}
                        style={styles.logoStyle}/>
              </ImageBackground>
            <Text style={styles.headerTextContainer}>
              {appName}
            </Text>
            <Text style={styles.motoTextContainer}>
              {motoMessage}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
