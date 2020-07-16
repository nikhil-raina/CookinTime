/* eslint-disable prettier/prettier */
/**
 * @provideModule WelcomeScreenStyle
 * @flow
 */

import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
});
