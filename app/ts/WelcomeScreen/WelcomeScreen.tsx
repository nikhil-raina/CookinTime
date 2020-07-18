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
} from 'react-native';

export default class HomeScreen extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  render(): React.ReactElement {
    const background_image = images.welcomeBackground;
    const logo_image = images.logoBackground;
    const appName = 'COOKIN TIME';
    const motoMessage = 'make food wait for you';
    return (
      <ImageBackground  source={background_image}
                        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image  source={logo_image}
                    style={styles.logoStyle}/>
          </View>
          <Text style={styles.headerTextContainer}>
            {appName}
          </Text>
          <Text style={styles.motoTextContainer}>
            {motoMessage}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
