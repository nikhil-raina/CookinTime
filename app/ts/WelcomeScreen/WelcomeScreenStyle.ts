/* eslint-disable prettier/prettier */
/**
 * @provideModule WelcomeScreenStyle
 * @flow
 */

import {
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0.6)',

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
    fontFamily: 'JosefinSans-Medium',
    fontSize: 40,
    color: '#F2E6C2',
    marginTop: 50,
  },

  motoTextContainer: {
    fontFamily: 'JosefinSans-Light',
    fontSize: 22,
    color: '#F2E6C2',
    marginBottom: 80,
  },
});
