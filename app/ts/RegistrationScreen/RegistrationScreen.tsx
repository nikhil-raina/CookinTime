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
  username: string,
  email: string,
  password: string,
  phoneNumber: string,
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
      username: '',
      phoneNumber: '',
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

  _setUserName(text: string) {
    this.setState({
      username: text,
    });
  }

  _setPhoneNumber(text: string) {
    this.setState({
      phoneNumber: text,
    });
  }

  _firstCheckScreen = () => {
    // TODO: Need to create modals here to show that something was invalid.
    const fail = setTimeout(() => {
      Keyboard.dismiss();
      console.log('being 1 called');
      this.setState({
        email: '',
        password: '',
        passwordAgain: '',
      });
    }, 150);  // The delay is for it to look realistically smooth

    if (!this._isEmailValid()) {
      console.log('Email Not Valid');
      fail;
    } else if (!this._isPasswordSame()) {
      console.log('Password is not the same');
      fail;
    } else {
      console.log('All First is Valid');
      this.setState({
        showFirstScreen: false,
      });
    }
  }

  _secondCheckScreen = () => {
    // TODO: Need to create modals here to show that something was invalid.
    const fail = setTimeout(() => {
      Keyboard.dismiss();
      console.log('being 2 called');
      this.setState({
        email: '',
        password: '',
        passwordAgain: '',
      });
    }, 150);  // The delay is for it to look realistically smooth
    if (!this._isUsernameValid()) {
      console.log('Username Not Valid');
      fail;
    } else if (isNaN(parseInt(this.state.phoneNumber))) {
      console.log('Phone number Not Valid');
      fail;
    } else {
      console.log('All Second is Valid');
      // TODO: Navigate to Main Screen
    }
  }

  _isUsernameValid() {
    // eslint-disable-next-line no-useless-escape
    return !/[~` !#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(this.state.username);
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
                          placeholder={'Ex. BobBobby@hungry.com'}
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
          {/* TODO: Make the image clickable so that one could add an image to their profile and edit it. */}
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
                          onChangeText={(value) => this._setUserName(value)}
                          value={this.state.username}
                          placeholder={'Ex. Bob Bobby'}
                          placeholderTextColor={'white'}/>
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
                          onChangeText={(value) => this._setPhoneNumber(value)}
                          value={this.state.phoneNumber}
                          placeholder={'123456789'}
                          placeholderTextColor={'white'}/>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={this._secondCheckScreen}>
            <Text style={[styles.textStyle, styles.buttonTextStyle]}>
              {'ENTER'}
            </Text>
          </TouchableOpacity>
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
