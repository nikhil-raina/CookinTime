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

  // TODO: Need to change this to the new Login Screen that Jessy will be giving.

  render(): React.ReactElement {
    const background_image = images.LOGIN_BACKGROUND;
    const facebookLogo = images.LOGIN_FACEBOOK_LOGO;
    const facebookLogoShadow = images.LOGIN_FACEBOOK_LOGO_SHADOW;
    const emailLogo = images.LOGIN_EMAIL_LOGO;
    const emailLogoShadow = images.LOGIN_EMAIL_LOGO_SHADOW;
    const googleLogo = images.LOGIN_GOOGLE_LOGO;
    const googleLogoShadow = images.LOGIN_GOOGLE_LOGO_SHADOW;
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
            {/* TODO: Make these Logos clickable.
            Try using the Touchable Opacity. After clicking them, they need
            to go to the respective ways of logging into the app. */}
            <View style={styles.imageContainer}>
                <ImageBackground  source={facebookLogoShadow}
                                  style={styles.logoStyleShadow}>
                  <Image  source={facebookLogo}
                          style={styles.logoStyle}/>
                </ImageBackground>
              <Text style={styles.logoTextContainer}>
                {'Facebook'}
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <ImageBackground  source={googleLogoShadow}
                                style={styles.logoStyleShadow}>
                <Image  source={googleLogo}
                        style={styles.logoStyle}/>
              </ImageBackground>
              <Text style={styles.logoTextContainer}>
                {'Google'}
              </Text>
            </View>
            <View style={styles.imageContainer}>
              <ImageBackground  source={emailLogoShadow}
                                style={styles.logoStyleShadow}>
                <Image  source={emailLogo}
                        style={styles.logoStyle}/>
              </ImageBackground>
              <Text style={styles.logoTextContainer}>
                {'Email'}
              </Text>
            </View>
          </View>
          <View style={styles.termsAndConditionsContainer}>
            <Text style={styles.otherTextContainer}>
              {'By continuing, you accept our'}
            </Text>
            <View style={{flexDirection:'row'}}>
              <Text style={styles.termsAndConditionsTextContainer}>
                {/* TODO: Need to make this as a hyperlink that takes the user to the
                Document that goes about showing the Privacy Notices */}
                {'Privacy Notices'}
              </Text>
              <Text style={styles.otherTextContainer}>
                {' and '}
              </Text>
              <Text style={styles.termsAndConditionsTextContainer}>
                {/* TODO: Need to make this as a hyperlink that takes the user to the
                Document that goes about showing the Terms of Use */}
                {'Terms of Use'}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
