/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * @providesModule RegistrationScreen_2
 * @flow
 */

import React from 'react';
import styles from './RegistrationScreenStyle_2';
import images from '../CIT-Modules/ImageTree';

import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
} from 'react-native';

export default class RegistrationScreen_2 extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  render(): React.ReactElement {
    const background_image = images.registration_background;
    const defaultProfilePicture = images.default_profile_picture;
    const nameText = 'Full name:';
    const contactText = 'Contact Number:';
    return (
      <ImageBackground  source={background_image}
                        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image  source={defaultProfilePicture}
                    style={styles.logoStyle}/>
          </View>
          <View style={styles.credentialContainer}>
            <View style={styles.nameContainer}>
              <View style={styles.credentialTextContainer}>
                <Text style={styles.credentialHeaderText}>
                  {nameText}
                </Text>
              </View>
              <View style={styles.replyTextContainer}>
                <TextInput  keyboardType={'default'}
                            style={styles.textStyle}
                            underlineColorAndroid={'#F2E6C2'}/>
              </View>
            </View>
            <View>
              <View style={styles.credentialTextContainer}>
                <Text style={styles.credentialHeaderText}>
                  {contactText}
                </Text>
              </View>
              <View style={styles.replyTextContainer}>
                <TextInput  keyboardType={'default'}
                            style={styles.textStyle}
                            underlineColorAndroid={'#F2E6C2'}/>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.textStyle}>
              {'NEXT'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
