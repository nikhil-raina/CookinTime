/* eslint-disable prettier/prettier */
/**
 * @providesModule WelcomeScreen
 * @flow
 */

import React from 'react';
import styles from './WelcomeScreenStyle';
import StaticImages from '../CIT-Modules/StaticImages';

import {
  View,
  ImageBackground,
} from 'react-native';

export default class HomeScreen extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }


  render(): React.ReactElement {
    const background_image = StaticImages.getWelcome('background');
    return (
      <View style={styles.container}>
        <ImageBackground  source={require(background_image)}
                          style={styles.backgroundImage}/>
      </View>
    );
  }
}