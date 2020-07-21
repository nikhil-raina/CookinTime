/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * @providesModule RegistrationScreen
 * @flow
 */

import React from 'react';
import styles from './RegistrationScreenStyle';
import images from '../CIT-Modules/ImageTree';

import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
} from 'react-native';

interface State {
  showScreen: boolean
}

export default class RegistrationScreen extends React.Component<{}, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      showScreen: true,
    };
  }

  _renderFirstScreen(): React.ReactElement {
    const emailText = 'E-mail:';
    const pwdText = 'Password:';
    const rePwdText = 'Re-enter Password:';
    return (
      <View style={styles.container}>
        <View style={styles.credentialsContainer}>
          <View style={{alignItems: 'center', marginTop: 80, marginBottom: 55}}>
            <Text style={styles.headerText}>
              {'Sign Up'}
            </Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.credentialHeaderText}>
              {emailText}
            </Text>
            <View style={styles.replyTextContainer}>
              <TextInput  keyboardType={'email-address'}
                          style={styles.textStyle}
                          autoCompleteType={'email'}
                          underlineColorAndroid={'#F2D750'}
                          value={'Nikhil Raina'}/>
            </View>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.credentialHeaderText}>
              {pwdText}
            </Text>
            <View style={styles.replyTextContainer}>
              <TextInput  keyboardType={'default'}
                          secureTextEntry={true}
                          style={styles.textStyle}
                          underlineColorAndroid={'#F2D750'}
                          value={'password'}/>
            </View>
          </View>
          <View>
            <Text style={styles.credentialHeaderText}>
              {rePwdText}
            </Text>
            <View style={styles.replyTextContainer}>
              <TextInput  keyboardType={'default'}
                          secureTextEntry={true}
                          style={styles.textStyle}
                          underlineColorAndroid={'#F2D750'}
                          value={'password'}/>
            </View>
          </View>
        </View>
        <View>
          <Text style={[styles.textStyle, styles.buttonTextStyle]}>
            {'NEXT'}
          </Text>
        </View>
      </View>
    );
  }

  _renderSecondScreen(): React.ReactElement {
    const defaultProfilePicture = images.REGISTRATION_DEFAULT_PROFILE_PICTURE;
    const defaultProfilePictureShadow = images.REGISTRATION_DEFAULT_PROFILE_PICTURE_SHADOW;
    const nameText = 'Full name:';
    const contactText = 'Contact Number:';
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground  source={defaultProfilePictureShadow}
                            style={styles.logoStyleShadow}>
            <Image  source={defaultProfilePicture}
                    style={styles.logoStyle}/>
          </ImageBackground>
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
            {'ENTER'}
          </Text>
        </View>
      </View>
    );
  }


  render(): React.ReactElement {
    const background_image = images.REGISTRATION_BACKGROUND;
    return (
      <ImageBackground  source={background_image}
                        style={styles.backgroundImage}>
        {this.state.showScreen ?
          this._renderSecondScreen() :
          this._renderFirstScreen()}
      </ImageBackground>
    );
  }
}
