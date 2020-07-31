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
import pogoTheme  from '../../assets/theme/pogo';

import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

interface State {
  showFirstScreen: boolean,
  email: string,
  password: string,
  passwordAgain: string,
}

export default class RegistrationScreen extends React.Component<{}, State> {

  // TODO: Get the placeholder HEX code for all colors
  constructor(props: any) {
    super(props);
    this.state = {
      showFirstScreen: true,
      email: '',
      password: '',
      passwordAgain: '',
    };
  }

  _setEmail(value: string) {
    this.setState({
      email: value,
    });
  }

  _setPassword(value: string) {
    this.setState({
      password: value,
    });
  }

  _setPasswordAgain(text: string) {
    this.setState({
      passwordAgain: text,
    });
  }

  _firstCheckScreen = () => {
    // TODO: Need to create modals here to show that something was invalid.
    if (!this._isEmailValid()) {
      console.log('Email Not Valid');
      setTimeout(() => {
        Keyboard.dismiss();
        this.setState({
          email: '',
          password: '',
          passwordAgain: '',
        });
      }, 150);  // The delay is for it to look realistically smooth
    } else if (!this._isPasswordSame()) {
      console.log('Password is not the same');
      setTimeout(() => {
        Keyboard.dismiss();
        this.setState({
          password: '',
          passwordAgain: '',
        });
      }, 150);  // The delay is for it to look realistically smooth
    } else {
      console.log('All is Valid');
      this.setState({
        showFirstScreen: false,
      });
    }
  }

  _isUsernameValid() {
    // eslint-disable-next-line no-useless-escape
    return !/[~` !#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.state.email);
  }

  _isEmailValid() {
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(this.state.email.toLowerCase());
  }

  _isPasswordSame() {
    return this.state.password.toLowerCase() === this.state.passwordAgain.toLowerCase();
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
                          underlineColorAndroid={pogoTheme.LIGHT_YELLOW.color}
                          onChangeText={(value) => this._setEmail(value)}
                          placeholder={'Ex. Bob Bobby'}
                          value={this.state.email}
                          placeholderTextColor={'white'}/>
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
                          underlineColorAndroid={pogoTheme.LIGHT_YELLOW.color}
                          onChangeText={(value) => this._setPassword(value)}
                          value={this.state.password}
                          placeholder={'Be secretive'}
                          placeholderTextColor={'white'}/>
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
                          underlineColorAndroid={pogoTheme.LIGHT_YELLOW.color}
                          onChangeText={(value) => this._setPasswordAgain(value)}
                          value={this.state.passwordAgain}
                          placeholder={'Be secretive again'}
                          placeholderTextColor={'white'}/>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={this._firstCheckScreen}>
            <Text style={[styles.textStyle, styles.buttonTextStyle]}>
              {'NEXT'}
            </Text>
          </TouchableOpacity>
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
                          underlineColorAndroid={pogoTheme.LIGHT_YELLOW.color}
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
                          underlineColorAndroid={pogoTheme.LIGHT_YELLOW.color}
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
        {this.state.showFirstScreen ?
          this._renderFirstScreen() :
          this._renderSecondScreen()}
      </ImageBackground>
    );
  }
}
