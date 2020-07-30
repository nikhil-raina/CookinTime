/* eslint-disable prettier/prettier */
/**
 * @provideModule MainScreenStyle
 * @flow
 */

import pogoTheme  from '../../assets/theme/pogo';
import tronTheme from '../../assets/theme/tron';
import {
  StyleSheet,
} from 'react-native';


export default StyleSheet.create({

  container: {
    backgroundColor: pogoTheme.WHITE.color,
    flex: 1,
  },

  headerContainer: {
    flexDirection: 'row',
    padding: 30,
    paddingBottom: 20,
    alignItems: 'center',
    ...pogoTheme.WHITE,
  },

  headingTextContainer: {
    flex: 1,
    marginLeft: -5,
  },

  headingTextStyle: {
    ...pogoTheme.DARK_GREY,
    ...tronTheme.font.reg,
    ...tronTheme.text.screenTitles,
  },

  searchGlassIconContainer: {
    flex: 0.2,
  },

  settingsIconContainer: {
    flex: 0.1,
    marginRight: -10,
  },

  imageContainer: {
    flex: 0.2,
  },

  imageStyle: {
    height: 30,
    width: 30,
    borderRadius: 5,
  },

  imageStyleFooter: {
    height: 30,
    width: 40,
  },

  imageStyleSecondary: {
    height: 21,
    width: 20,
  },

  footerOuterContainer: {
    alignItems: 'center',
  },

  footerInnerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: pogoTheme.LIGHT_GREY.color,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 80,
    height: 55,
  },
});
