/* eslint-disable prettier/prettier */
/**
 * @provideModule LoginScreenStyle
 * @flow
 */

import {
  StyleSheet,
  Dimensions,
  Platform,
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
        elevation: 10,
      },
    }),
  },

  headerTextContainer: {
    paddingTop: 60,
    fontFamily: 'JosefinSans-Medium',
    fontSize: 34,
    color: '#F2E6C2',
    marginBottom: 10,
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
