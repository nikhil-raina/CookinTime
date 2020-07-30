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

  container: {
    width: 270,
    height: 230,
    marginHorizontal: 5,
    borderRadius: 10,
    position: 'absolute',
    borderWidth: 0.3,
    borderColor: pogoTheme.LIGHT_GREY.color,
  },

  surroundContainer: {},

  shadowContainer: {
    width: 270,
    height: 233,
    marginLeft: 9,
    borderRadius: 10,
    backgroundColor: pogoTheme.LIGHT_GREY.color,
    opacity: 0.4,
  },

  contentContainer: {
    flex: 5,
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
    width: null,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: pogoTheme.OFF_WHITE.color,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  imageContainer: {
    width: null,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
    flex: 1,
    resizeMode: 'cover',
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
