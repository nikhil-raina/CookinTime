/* eslint-disable prettier/prettier */
/**
 * @provideModule RecipeCardStyle
 * @flow
 */

import pogoTheme  from '../../../assets/theme/pogo';
import tronTheme from '../../../assets/theme/tron';
import {
  StyleSheet,
} from 'react-native';


export default StyleSheet.create({

  outerContainer: {
    alignItems: 'center',
  },

  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 20,
  },

  contentContainer: {
    alignContent: 'center',
    justifyContent: 'center',
  },

  headerTextStyle: {
    ...tronTheme.font.semiBold,
    ...tronTheme.text.primaryText,
    flexShrink: 1,
  },

  timeTextStyle: {
    ...tronTheme.font.light,
    ...tronTheme.text.secondaryText,
  },

  contentDetailContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: pogoTheme.WHITE.color,
    width: 320,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  imageContainer: {
    width: 320,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },

  saveIconStyle: {
    height: 20,
    width: 30,
  },

  saveIconContainer: {
    justifyContent: 'center',
  },

  detailContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },

});
