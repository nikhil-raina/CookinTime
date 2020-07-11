/* eslint-disable prettier/prettier */
/**
 * @providesModule LoginScreen
 * @flow
 */

import React from 'react';
import styles from './LoginScreenStyle';

import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

interface State {
  userNameText: string
}
export default class LoginScreen extends React.Component<{}, State> {

  constructor(props: any){
    super(props);
    this.state = {
      userNameText: '',
    };
  }

  _doesUserNameExists = () => {
    const username = this.state.userNameText;
    if (this._isValid(username)) {
      //  TODO send the username to the data base and check if it exists.
      //  TODO 1. Get the data and populate the other screens if it exists.
      //  TODO 2. Show a modal saying that the candidate doesn't exists
      //  "Sorry, such a candidate hasn't registered with us, yet..."
    } else {
      // TODO Show a modal saying that the username entered is invalid
      // "The username entered is invalid. Please check again."
    }
    setTimeout(() => {
      Keyboard.dismiss();
      this.setState({
        userNameText: '',
      });
    }, 150);  // The delay is for it to look realistically smooth
  }

  _setUserName(value: string) {
    this.setState({
      userNameText: value,
    });
  }

  _isValid(text: string) {
    // eslint-disable-next-line no-useless-escape
    return !/[~` !#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(text);
  }

  render(): React.ReactElement {
    const headerText = 'Enter Username below to get some Info on the Candidate';
    return (
      <KeyboardAvoidingView  enabled={true}
                             behavior={'padding'}
                             style={styles.MainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTextStyle}>
            {headerText}
          </Text>
        </View>
        <View style={styles.contextContainer}>
            <Text style={styles.titleText}>
              {'Username:'}
            </Text>
            <TextInput  style={styles.usernameTextStyle}
                        placeholder={'Candidate\'s username'}
                        onChangeText={(value) => this._setUserName(value)}
                        clearButtonMode={'always'}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title={'Get Info'}
                  onPress={this._doesUserNameExists}
                  color={'#0F0403'}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
