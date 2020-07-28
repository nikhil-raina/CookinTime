/* eslint-disable prettier/prettier */
/**
 * @providesModule tron
 * @flow
 */
import {
  Dimensions,
} from 'react-native';

const tronTheme = {
  defaultBackgroundImage: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  font: {
    medium: {
      fontFamily: 'JosefinSans-Medium',
    },

    light: {
      fontFamily: 'JosefinSans-Light',
    },

    reg: {
      fontFamily: 'JosefinSans-Regular',
    },

    semiBold: {
      fontFamily: 'JosefinSans-SemiBold',
    },
  },

  text: {
    mainHeader: {
      fontSize: 36,
    },

    secondaryHeader: {
      fontSize: 32,
    },

    ternaryHeader: {
      fontSize: 26,
    },

    screenTitles: {
      fontSize: 24,
    },

    subHeader: {
      fontSize: 20,
    },

    subHeaderDetail: {
      fontSize: 18,
    },

    primaryText: {
      fontSize: 14,
    },

    secondaryText: {
      fontSize: 12,
    },

    logoHeader: {
      fontSize: 10,
    },
  },
};

export default tronTheme;
