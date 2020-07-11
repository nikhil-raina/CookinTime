/* eslint-disable prettier/prettier */
/**
 * @provideModule LoginScreenStyle
 * @flow
 */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#F2E6C2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyleHeading: {
    fontSize: 40,
    color: '#002942',
  },

  textStyleSubHeading: {
    paddingTop: 5,
    fontSize: 25,
    color: '#5F6B6E',
    padding: 30,
  },

  headerContainer: {
    flex: 0.5,
    width: 300,
  },

  headerTextStyle: {
    fontSize: 38,
    fontWeight: '600',
    textAlign: 'center',
    padding: 10,
  },

  titleText: {
    fontSize: 20,
    paddingBottom: 10,
  },

  buttonContainer: {
    backgroundColor: '#D6D011',
    borderWidth: 1.5,
    borderRadius: 10,
    width: 200,
    height: 50,
    justifyContent: 'center',
  },

  contextContainer: {
    flex: 0.15,
  },

  usernameTextStyle: {
    borderWidth: 1,
    borderColor: '#454E59',
    padding: 8,
    width: 300,
    fontSize: 16,
  },
});
