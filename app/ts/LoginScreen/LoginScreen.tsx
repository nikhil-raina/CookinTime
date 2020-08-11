/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * @providesModule LoginScreen
 * @flow
 */

import React, { ReactPropTypes } from 'react';
import styles from './LoginScreenStyle';
import images from '../CIT-Modules/ImageTree';
import pogoTheme from '../../assets/theme/pogo';
import CheckBox from '@react-native-community/checkbox';

import {
  View,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

interface State {
  email: string,
  password: string,
  checkBox: boolean,
}

interface Props {
  navigation: ReactPropTypes,
}
export default class LoginScreen extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checkBox: false,
    };
  }

  _setEmail(value: string) {
    this.setState({
      email: value,
    });
  }

  _onChange(tick: boolean) {
    this.setState({
      checkBox: tick,
    });
  }

  _setPassword(value: string) {
    this.setState({
      password: value,
    });
  }

  _navigation = () => {
    this.props.navigation.navigate('Sign In');
  }

  _isLoginSuccess = () => {
    this.props.navigation.navigate('Main');

  }

  render(): React.ReactElement {
    const background_image = images.REGISTRATION_BACKGROUND;
    const emailText = 'E-mail:';
    const pwdText = 'Password:';
    return (
      <ImageBackground  source={background_image}
                        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.credentialsContainer}>
            <View style={{alignItems: 'center', marginTop: 80, marginBottom: 55}}>
              <Text style={styles.headerText}>
                {'Log In'}
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
                            placeholder={' example@123.com'}
                            value={this.state.email}
                            placeholderTextColor={pogoTheme.PLACEHOLDER_YELLOW.color}/>
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
                            placeholderTextColor={pogoTheme.LIGHT_YELLOW.color}/>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 60}}>
          <TouchableOpacity style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <Text style={styles.footerTextStyle}>
              {'Forgot Password?'}
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
            <CheckBox disabled={false}
                      value={this.state.checkBox}
                      onValueChange={(check) => this._onChange(check)}
                      tintColors={{true: pogoTheme.LIGHT_YELLOW.color, false: pogoTheme.YELLOW.color}}/>
            <Text style={styles.footerTextStyle}>
              {'Remember me'}
            </Text>
          </View>
          <TouchableOpacity onPress={this._isLoginSuccess}
                            style={{alignItems: 'center'}}>
            <Text style={[styles.textStyle, styles.buttonTextStyle]}>
              {'NEXT'}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
