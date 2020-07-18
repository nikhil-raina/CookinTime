/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/**
 * @providesModule LoginScreen
 * @flow
 */

import React from 'react';
import styles from './LoginScreenStyle';
import images from '../CIT-Modules/ImageTree';

import {
  View,
  Image,
  Text,
  ImageBackground,
} from 'react-native';

export default class LoginScreen extends React.Component<{}, {}> {

  constructor(props: any) {
    super(props);
  }

  render(): React.ReactElement {
    const background_image = images.login_background;
    const facebookLogo = images.login_facebook_logo;
    const emailLogo = images.login_email_logo;
    const googleLogo = images.login_google_logo;
    const headerDialogue = 'Kitchen awaits you!!';
    const firstLineMessage = 'To get a personalized experience, ';
    const secondLineMessage = 'please sign in with:';
    return (
      <ImageBackground  source={background_image}
                        style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.headerTextContainer}>
            {headerDialogue}
          </Text>
          <View style={styles.messageContainer}>
            <Text style={styles.inLineTextContainer}>
              {firstLineMessage}
            </Text>
            <Text style={styles.inLineTextContainer}>
              {secondLineMessage}
            </Text>
          </View>
          <View style={styles.logosContainer}>
            <View style={styles.imageContainer}>
              <Image  source={facebookLogo}
                      style={styles.logoStyle}/>
              <Text style={styles.logoTextContainer}>
                {'Facebook'}
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image  source={googleLogo}
                      style={styles.logoStyle}/>
              <Text style={styles.logoTextContainer}>
                {'Google'}
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <Image  source={emailLogo}
                      style={styles.logoStyle}/>
              <Text style={styles.logoTextContainer}>
                {'Email'}
              </Text>
            </View>
          </View>
          <View style={styles.termsAndConditionsContainer}>
            <Text style={styles.otherTextContainer}>
              {'By continuing, you agree to our'}
            </Text>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.termsAndConditionsTextContainer}>
                {'Privacy Notice'}
              </Text>
              <Text style={styles.otherTextContainer}>
                {' and '}
              </Text>
              <Text style={styles.termsAndConditionsTextContainer}>
                {'Terms of Use'}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
