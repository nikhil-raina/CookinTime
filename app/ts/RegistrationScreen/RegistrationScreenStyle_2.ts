/* eslint-disable prettier/prettier */
/**
 * @provideModule RegistrationScreenStyle_2
 * @flow
 */

import {
  StyleSheet,
  Dimensions,
} from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  backgroundImage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  logoStyle: {
    height: 140,
    width: 140,
  },

  imageContainer: {
    marginTop: 70,
    marginBottom: 30,
  },

  credentialsContainer: {
    marginBottom: 40,
    width: 280,
  },

  replyTextContainer: {
    paddingLeft: 5,
  },

  credentialHeaderText: {
    color: '#F2D750',
    fontFamily: 'JosefinSans-Light',
    fontSize: 14,

  },

  nameContainer: {
    marginBottom: 25,
  },

  textStyle: {
    fontFamily: 'JosefinSans-Regular',
    fontSize: 18,
    color: '#F2E6C2',
    
  },


});
