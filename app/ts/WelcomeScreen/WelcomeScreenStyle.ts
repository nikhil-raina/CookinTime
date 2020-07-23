/* eslint-disable prettier/prettier */
/**
 * @provideModule WelcomeScreenStyle
 * @flow
 */

import pogoTheme  from '../../assets/theme/pogo';
import tronTheme from '../../assets/theme/tron';
import {
  StyleSheet,
} from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    ...tronTheme.defaultBackgroundImage,
  },

  logoStyle: {
    height: 110,
    width: 110,
    borderRadius: 25,
  },

  logoStyleShadow: {
    alignItems: 'center',
    height: 135,
    width: 135,
  },

  headerTextContainer: {
    ...tronTheme.font.medium,
    ...tronTheme.text.mainHeader,
    ...pogoTheme.LIGHT_YELLOW,
    marginTop: 40,
  },

  motoTextContainer: {
    ...tronTheme.font.light,
    ...tronTheme.text.subHeader,
    ...pogoTheme.LIGHT_YELLOW,
    marginBottom: 80,
  },
});
