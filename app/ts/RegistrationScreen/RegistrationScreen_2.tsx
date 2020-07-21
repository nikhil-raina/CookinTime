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
    const background_image = images.REGISTRATION_BACKGROUND;
    const defaultProfilePicture = images.REGISTRATION_DEFAULT_PROFILE_PICTURE;
    const defaultProfilePictureShadow = images.REGISTRATION_DEFAULT_PROFILE_PICTURE_SHADOW;
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
          <View style={styles.credentialsContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.credentialHeaderText}>
                {nameText}
              </Text>
              <View style={styles.replyTextContainer}>
                <TextInput  keyboardType={'default'}
                            style={styles.textStyle}
                            underlineColorAndroid={'#F2D750'}
                            value={'Nikhil Raina'}/>
              </View>
            </View>
            <View>
              <Text style={styles.credentialHeaderText}>
                {contactText}
              </Text>
              <View style={styles.replyTextContainer}>
                <TextInput  keyboardType={'numeric'}
                            style={styles.textStyle}
                            underlineColorAndroid={'#F2D750'}
                            value={'1234567890'}/>
              </View>
            </View>
          </View>
          <View>
            <Text style={[styles.textStyle, styles.buttonTextStyle]}>
              {'NEXT'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
