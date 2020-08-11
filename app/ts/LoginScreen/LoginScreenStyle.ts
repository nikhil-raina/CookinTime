/* eslint-disable prettier/prettier */
/**
 * @provideModule LoginScreenStyle
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

  logoStyle: {
    height: 140,
    width: 140,
  },

  logoStyleShadow: {
    alignItems: 'center',
    height: 160,
    width: 150,
  },

  imageContainer: {
    marginTop: 70,
    marginBottom: 30,
  },

  credentialsContainer: {
    marginBottom: 10,
    width: 280,
  },

  replyTextContainer: {
    paddingLeft: 5,
  },

  credentialHeaderText: {
    ...pogoTheme.YELLOW,
    ...tronTheme.font.light,
    ...tronTheme.text.primaryText,
  },

  headerText: {
    ...pogoTheme.YELLOW,
    ...tronTheme.font.reg,
    ...tronTheme.text.ternaryHeader,
  },

  nameContainer: {
    marginBottom: 25,
  },

  textStyle: {
    ...tronTheme.font.reg,
    ...tronTheme.text.subHeaderDetail,
    ...pogoTheme.LIGHT_YELLOW,
  },

  footerTextStyle: {
    ...tronTheme.font.light,
    ...tronTheme.text.secondaryText,
    ...pogoTheme.LIGHT_YELLOW,
  },

  buttonTextStyle: {
    borderBottomWidth: 1,
    ...pogoTheme.YELLOW,
    borderBottomColor: pogoTheme.LIGHT_YELLOW.color,
    ...tronTheme.text.subHeader,
    ...tronTheme.font.semiBold,
  },
});
