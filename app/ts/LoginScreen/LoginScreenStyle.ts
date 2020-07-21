/* eslint-disable prettier/prettier */
/**
 * @provideModule LoginScreenStyle
 * @flow
 */

import {
  StyleSheet,
  Dimensions,
} from 'react-native';


export default StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  backgroundImage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0.6)',

  },

  logosContainer: {
    width: 230,
    flexDirection: 'row',
    marginBottom: 50,
  },

  imageContainer: {
    alignItems: 'center',
    flex: 1,
  },

  logoTextContainer: {
    fontFamily: 'JosefinSans-Light',
    fontSize: 10,
    color: '#F2E6C2',
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
    paddingTop: 60,
    fontFamily: 'JosefinSans-Medium',
    fontSize: 34,
    color: '#F2E6C2',
    marginBottom: 60,
  },

  messageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  termsAndConditionsContainer: {
    alignItems: 'center',
  },

  otherTextContainer: {
    fontFamily: 'JosefinSans-Light',
    fontSize: 10,
    color: '#F2E6C2',
  },

  termsAndConditionsTextContainer: {
    fontFamily: 'JosefinSans-Light',
    fontSize: 10,
    color: '#F2E6C2',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  inLineTextContainer: {
    fontFamily: 'JosefinSans-Light',
    fontSize: 18,
    color: '#F2E6C2',
  },
});
