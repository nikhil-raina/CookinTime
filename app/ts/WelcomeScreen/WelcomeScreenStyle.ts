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

  logoContainer: {
    borderRadius: 25,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5,
      },
      android: {
        elevation: 20,
      },
    }),
  },

  logoStyle: {
    height: 110,
    width: 110,
    borderRadius: 25,
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
