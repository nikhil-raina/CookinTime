/* eslint-disable prettier/prettier */
/**
 * @provideModule RecipeDeckStyle
 * @flow
 */

import pogoTheme  from '../../../assets/theme/pogo';
import tronTheme from '../../../assets/theme/tron';
import {
  StyleSheet,
} from 'react-native';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 20,
  },

  headerContainer: {
    alignItems: 'center',
    paddingBottom: 10,
  },

  headerTextStyle: {
    ...tronTheme.text.secondaryText,
    ...tronTheme.font.reg,
    ...pogoTheme.LIGHT_GREY,
  },
});
