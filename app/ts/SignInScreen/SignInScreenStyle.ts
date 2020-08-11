/* eslint-disable prettier/prettier */
/**
 * @provideModule SignInScreenStyle
 * @flow
 */

import pogoTheme  from '../../assets/theme/pogo';
import tronTheme from '../../assets/theme/tron';
import {
  StyleSheet,
} from 'react-native';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  backgroundImage: {
    ...tronTheme.defaultBackgroundImage,
  },

  logosContainer: {
    width: 230,
    flexDirection: 'row',
    marginBottom: 45,
  },

  imageContainer: {
    alignItems: 'center',
    flex: 1,
  },

  logoTextContainer: {
    ...pogoTheme.LIGHT_YELLOW,
    ...tronTheme.text.logoHeader,
    ...tronTheme.font.light,
  },

  logoStyle: {
    height: 60,
    width: 60,
  },

  logoStyleShadow: {
    alignItems: 'center',
    height: 75,
    width: 75,
  },

  headerTextContainer: {
    ...tronTheme.font.medium,
    ...tronTheme.text.secondaryHeader,
    ...pogoTheme.YELLOW,
    paddingTop: 40,
    marginBottom: 40,
  },

  messageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  termsAndConditionsContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },

  otherTextContainer: {
    ...tronTheme.font.light,
    ...tronTheme.text.logoHeader,
    ...pogoTheme.LIGHT_YELLOW,
  },

  termsAndConditionsTextContainer: {
    ...tronTheme.font.light,
    ...pogoTheme.LIGHT_YELLOW,
    ...tronTheme.text.logoHeader,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  inLineTextContainer: {
    ...tronTheme.font.light,
    ...tronTheme.text.subHeaderDetail,
    ...pogoTheme.LIGHT_YELLOW,
  },

  textStyle: {
    ...tronTheme.font.reg,
    ...tronTheme.text.subHeaderDetail,
    ...pogoTheme.YELLOW,
  },

  buttonTextStyle: {
    borderBottomWidth: 1,
    borderBottomColor: pogoTheme.YELLOW.color,
    ...tronTheme.text.subHeader,
    ...tronTheme.font.semiBold,
  },
});
